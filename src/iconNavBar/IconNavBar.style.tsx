import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  user-select: none;
`;

export const Item = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
  color: ${(props: { selected: boolean }) => (props.selected ? '#308c91' : '#000')};
`;
