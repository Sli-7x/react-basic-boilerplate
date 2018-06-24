import styled from 'styled-components';

export const Close = styled.div`
  position: absolute;
  top: 2px;
  right: 5px;
  cursor: pointer;
  width: 25px;
  height: 30px;
  text-align: center;

  i {
    color: #fff;
    font-size: 20px;
  }
`;

export const Header = styled.div`
  font-size: 25px;
  font-weight: 300;
  padding: 20px 20px 20px 20px;
  color: #fff;
  background: #327f85; /* Old browsers */
  background: -moz-linear-gradient(left, #327f85 0%, #26c8ca 100%);
  background: -webkit-linear-gradient(left, #327f85 0%, #26c8ca 100%);
  background: linear-gradient(to right, #327f85 0%, #26c8ca 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#327f85', endColorstr='#26c8ca', GradientType=1);
`;

export const Content = styled.div`
  padding: 20px;
`;
