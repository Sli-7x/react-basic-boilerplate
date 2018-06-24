import * as React from 'react';
import { Content, StyledTab } from './ButtonTab.style';

export interface IButtonTabList {
  id: string | number;
  title: string | number;
}

export interface IButtonTabProps {
  onClick: (value: number | string, name: string) => void;
  value: string | number;
  name: string;
  list: IButtonTabList[];
}

export interface IButtonTabProps {}

export class ButtonTab extends React.Component<IButtonTabProps, any> {
  shouldComponentUpdate(nextProps: IButtonTabProps) {
    if (nextProps.value === this.props.value) {
      return false;
    }

    return true;
  }

  handleClick(value: number | string) {
    this.props.onClick(value, this.props.name);
  }

  render() {
    const { value, list } = this.props;

    return (
      <Content>
        {list.map((val: any, i: number) => (
          <StyledTab onClick={this.handleClick.bind(this, val.id)} key={i} selected={value === val.id}>
            {val.title}
          </StyledTab>
        ))}
      </Content>
    );
  }
}
