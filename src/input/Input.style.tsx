import styled from 'styled-components';

export interface IStyledInput {
  isInvalid: boolean;
}

export const StyledInput = styled.input`
  border: 1px solid ${(props: IStyledInput) => (props.isInvalid ? 'red' : '#8f8f8f')};
  width: 100%;
  padding: 5px 7px;
  font-size: 15px;
  color: #555;
  min-height: 32px;
`;

export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;
