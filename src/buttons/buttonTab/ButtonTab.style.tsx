import styled from 'styled-components';

export interface IStyledTab {
  selected: boolean;
}

export const Content = styled.div`
  display: flex;
`;

export const StyledTab = styled.div`
  color: ${(props: IStyledTab) => (props.selected ? '#fff' : '#282828')};
  background: ${(props: IStyledTab) => (props.selected ? '#308c91' : '#fff')};
  padding: ${(props: IStyledTab) => (props.selected ? '8px 20px' : '7px 20px')};
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
