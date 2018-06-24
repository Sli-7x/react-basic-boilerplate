import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import OutsideClick from '../outsideClick/OutsideClick';
import { InputStyle, Triangle, InputContent, DropDown, Item } from './Select.style';

export interface ISelected {
  [key: string]: string | number;
}

export interface IKeys {
  id: string;
  title: string;
  childs?: string;
}

export interface IStyle {
  [key: string]: any;
}

export interface ISelectProps {
  onChange: (id: string | number | null, name?: string | null) => void;
  value: string | number | null;
  list: any[];
  label?: string;
  placeholder?: string;
  inputStyle?: IStyle;
  style?: IStyle;
  keys?: IKeys;
  hintText?: string;
  name?: string | null;
}

export class Select extends React.Component<ISelectProps, any> {
  static defaultProps: ISelectProps = {
    onChange: () => undefined,
    value: null,
    label: undefined,
    placeholder: undefined,
    list: [],
    keys: { id: 'id', title: 'title', childs: 'childs' },
    hintText: '',
    name: null,
  };

  public scrollbarsRef: Scrollbars;
  public inputRef: any;

  constructor(props: ISelectProps) {
    super(props);
    this.toogleList = this.toogleList.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.foundSelected = this.foundSelected.bind(this);
    this.scrollToValue = this.scrollToValue.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.state = {
      showList: false,
      focused: false,
      selected: { id: null, title: '' },
      keys: props.keys ? props.keys : { id: 'id', title: 'title', childs: 'childs' },
      fakeSelect: null,
      list: [],
      search: '',
    };
  }

  componentDidMount() {
    const found = this.foundSelected();

    if (found) {
      this.setState({ selected: found, list: this.props.list, fakeSelect: found }, () => {
        this.scrollToValue(found);
      });
    } else {
      this.setState({ selected: { id: null, title: '' }, list: this.props.list, fakeSelect: null });
    }
  }

  componentWillReceiveProps(nextProps: any) {
    const found = nextProps.list.find((x: ISelected) => x[this.state.keys.id] === nextProps.value);
    if (found) {
      this.setState({ selected: found, list: nextProps.list }, () => {
        this.scrollToValue(found);
      });
    } else {
      this.setState({ selected: { id: null, title: '' }, list: nextProps.list });
    }
  }

  componentWillUnmount() {
    this.resetState();
  }

  handleSelect(obj: ISelected, blur?: boolean) {
    this.setState({ showList: false, focused: !blur, fakeSelect: null }, () => {
      this.setBodyScroll();

      if (obj && obj[this.state.keys.id] !== this.props.value) {
        this.props.onChange(obj ? obj[this.state.keys.id] : null, this.props.name);
      }
    });
  }

  foundSelected() {
    return this.props.list.find((val: ISelected) => val[this.state.keys.id] === this.props.value);
  }

  setBodyScroll() {
    if (this.state.showList) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = '0';
    }
  }

  toogleList() {
    if (!this.state.showList) {
      const obj = this.foundSelected();

      this.setState({ showList: true, focused: true, fakeSelect: obj }, () => {
        this.scrollToValue(obj);
        this.setBodyScroll();
      });
    } else {
      this.resetState();
    }
  }

  scrollToValue(value: ISelected | null) {
    if (this.scrollbarsRef && value) {
      const scrollHeight = this.scrollbarsRef.getScrollHeight();
      const { list } = this.state;

      const index = list.findIndex((x: ISelected) => x[this.state.keys.id] === value[this.state.keys.id]);

      if (index > -1) {
        const nrTo = scrollHeight / list.length * index;
        this.scrollbarsRef.scrollTop(nrTo - 30);
      }
    }
  }

  // Tab - 9, Enter - 13, Esc - 27, Up - 38, Down - 40
  onInputKeyPress(e: any) {
    if (this.state.focused && [9, 13, 27, 38, 40].indexOf(e.keyCode) !== -1) {
      const { showList, fakeSelect, list } = this.state;

      if (!showList && [13, 38, 40].indexOf(e.keyCode) !== -1) {
        const selected = this.foundSelected();
        return this.setState({ showList: true, fakeSelect: selected }, () => {
          this.setBodyScroll();
          this.scrollToValue(selected);
        });
      }

      if (e.keyCode === 27 || e.keyCode === 9) {
        return this.setState({ showList: false, fakeSelect: null });
      }

      // Enter or Escape
      if (e.keyCode === 13) {
        const selected = list.find((val: ISelected) => val[this.state.keys.id] === fakeSelect[this.state.keys.id]);
        this.handleSelect(selected, e.keyCode === 9);
      } else {
        this.selectOnArrow(e.keyCode);
      }
    }
  }

  selectOnArrow(keyCode: number) {
    const { fakeSelect, list } = this.state;

    const length = list.length;
    let nextIndex = 0;
    const index = fakeSelect
      ? list.findIndex((x: ISelected) => x[this.state.keys.id] === fakeSelect[this.state.keys.id])
      : -1;

    if (keyCode === 40) {
      // "Arrow down" click
      nextIndex = index + 1;
      if (length - 1 < nextIndex) {
        nextIndex = length - 1;
      }
    } else if (keyCode === 38) {
      // "Arrow up" click
      nextIndex = index - 1;
      if (nextIndex < 0) {
        nextIndex = 0;
      }
    }

    this.setState({ fakeSelect: list[nextIndex] }, () => {
      this.scrollToValue(list[nextIndex]);
    });
  }

  // Hides dropdown on outside click
  handleClickOutside() {
    if (this.state.showList === true || this.state.focused === true) {
      this.resetState();
    }
  }

  getList(data: ISelected[]) {
    return data.map((val: ISelected, i: number) => {
      return (
        <Item
          key={i}
          onClick={this.handleSelect.bind(this, val, true)}
          selected={val[this.state.keys.id] === this.state.selected[this.state.keys.id]}
          fakeSelected={
            this.state.fakeSelect &&
            this.state.fakeSelect[this.state.keys.id] === val[this.state.keys.id] &&
            val[this.state.keys.id] !== this.state.selected[this.state.keys.id]
          }
        >
          {val.title}
        </Item>
      );
    });
  }

  onFocus() {
    this.setState({ focused: true });
  }

  resetState() {
    this.setState({ showList: false, focused: false, fakeSelect: null }, this.setBodyScroll);
  }

  render() {
    const { placeholder, label, inputStyle, style } = this.props;
    const { focused, list, selected } = this.state;

    const labelComp = label ? <label>{label}</label> : '';
    const itemList: any[] = this.getList(list);

    return (
      <div style={{ position: 'relative' }}>
        <OutsideClick onOutside={this.handleClickOutside}>
          {labelComp}
          <InputContent focus={focused} style={style ? { ...style } : {}}>
            <InputStyle
              type="text"
              value={selected ? selected[this.state.keys.title] : ''}
              placeholder={placeholder}
              readOnly={true}
              onClick={this.toogleList}
              onKeyDown={this.onInputKeyPress}
              style={inputStyle ? { ...inputStyle } : {}}
              onFocus={this.onFocus}
            />
            <Triangle />
          </InputContent>
          <DropDown>
            <Scrollbars
              ref={(el: Scrollbars) => (this.scrollbarsRef = el)}
              autoHeight={true}
              autoHeightMax={200}
              style={this.state.showList === true ? { border: '1px solid #8f8f8f' } : { height: 0 }}
            >
              {this.state.showList ? itemList : null}
            </Scrollbars>
          </DropDown>
        </OutsideClick>
      </div>
    );
  }
}
