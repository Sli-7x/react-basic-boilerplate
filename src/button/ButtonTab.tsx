import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
`;

const StyledTab = styled.div`
  color: ${(props: { selected: boolean }) => (props.selected ? '#fff' : '#282828')};
  background: ${(props: { selected: boolean }) => (props.selected ? '#308c91' : '#fff')};
  padding: ${(props: { selected: boolean }) => (props.selected ? '8px 20px' : '7px 20px')};
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  cursor: pointer;
  flex: 1;
  text-align: center;
  border: ${(props: { selected: boolean }) => (props.selected ? 'none' : '1px solid #ccc')};
  align-self: center;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

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
