import * as React from 'react';
import { Icon } from '../index';
import { Container, Item } from './IconNavBar.style';

export interface IconNavBarItem {
  id: string;
  title: string;
  icon: string;
}

export interface IKeys {
  id: string;
  title: string;
  icon: string;
}

export interface IIconNavBarProps {
  list: IconNavBarItem[];
  value: string | number;
  name: string;
  keys?: IKeys;
  onSelect: (id: string, name: string) => void;
}

export class IconNavBar extends React.Component<IIconNavBarProps, any> {
  constructor(props: IIconNavBarProps) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      keys: props.keys ? props.keys : { id: 'id', title: 'title', childs: 'childs' },
    };
  }

  onClick(id: string) {
    this.props.onSelect(id, this.props.name);
  }

  render() {
    const { keys } = this.state;
    const { value } = this.props;

    return (
      <Container>
        {this.props.list.map((val: any, i: number) => (
          <Item key={i} selected={value === val[keys.id]}>
            <Icon onClick={this.onClick.bind(this, val[keys.id])} name={val[keys.icon]} />
          </Item>
        ))}
      </Container>
    );
  }
}
