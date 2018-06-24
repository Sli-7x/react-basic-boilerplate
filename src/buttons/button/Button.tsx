import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: ${(props: any) => props.theme.fontFamily};
  position: relative;
  padding: 10px 15px;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #327f85; /* Old browsers */
  background: -moz-linear-gradient(left, #327f85 0%, #26c8ca 100%);
  background: -webkit-linear-gradient(left, #327f85 0%, #26c8ca 100%);
  background: linear-gradient(to right, #327f85 0%, #26c8ca 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#327f85', endColorstr='#26c8ca', GradientType=1);
  border: none;
  &:focus,
  &:hover {
    background: #26c8ca;
    color: #fff;
  }
`;

export interface IButtonProps {
  onClick?: () => void;
  children: any;
  style?: Partial<{ [key: string]: any }>;
}

export const Button: React.StatelessComponent<IButtonProps> = ({ onClick, children, style }) => (
  <StyledButton onClick={onClick} style={{ ...style }}>
    {children}
  </StyledButton>
);
