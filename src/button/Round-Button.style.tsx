import styled from 'styled-components';

interface IItemActive {
  selected?: boolean;
}

export const Content = styled.div`
  display: grid;
  margin: 5px;
  justify-items: center;
`;

export const Button = styled.button`
  background: ${(props: IItemActive) => (props.selected ? '#327f85' : 'white')};
  font-family: 'Roboto';
  position: relative;
  color: white;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #327f85;
  justify-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  &:focus,
  &:hover {
    background: #26c8ca;
    color: #fff;
  }
`;
