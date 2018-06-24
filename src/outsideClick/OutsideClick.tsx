import * as React from 'react';

export interface IOutsideClick {
  onOutside: () => void;
  children: any;
  wrapperRef?: any;
  onBlur?: () => void;
}

class OutsideClick extends React.Component<IOutsideClick, {}> {
  private wrapperRef: any;

  constructor(props: IOutsideClick) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event: Event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutside();
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} style={{ width: '100%', height: '100%' }} onBlur={this.props.onBlur}>
        {this.props.children}
      </div>
    );
  }
}

export default OutsideClick;
