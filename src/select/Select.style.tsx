import styled from 'styled-components';

export const InputContent = styled.div`
  position: relative;
  border: 1px solid ${(props: { focus: boolean }) => (props.focus ? '#47bcc5' : '#a9a9a9')};
  background: #ffffff;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  min-height: 30px;
  text-align: left;
  outline: none;
  &:focus {
    border-color: red;
  }
`;

export const InputStyle = styled.input`
  border: none;
  width: 100%;
  padding: 5px 7px;
  font-size: 15px;
  color: #555;
  min-height: 30px;
  cursor: pointer;
  user-select: none;

  &:focus {
    border-color: red;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  right: 6px;
  bottom: 50%;
  transform: translateY(50%);
  width: 0;
  height: 0;
  border-top: 6px solid #000;
  border-right: 3px solid transparent !important;
  border-left: 3px solid transparent !important;
`;

export const DropDown = styled.div`
  margin-bottom: 20px;
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: block;
  max-width: 100%;
  position: absolute;
  left: 0;
  top: 99%;
  width: 100%;
  z-index: 3;
  background: #ffffff;
  min-height: 0;
  overflow: hidden;
  text-align: left;
`;

interface IItem {
  selected: boolean;
  fakeSelected: boolean;
}

export const Item = styled.div`
  padding: 6px 5px;
  cursor: pointer;
  color: ${(props: IItem) => (props.selected ? '#47bcc5' : '#000')};
  line-height: 1;

  background: ${(props: IItem) => {
    if (props.selected) {
      return '#F5F5F5';
    }
    if (props.fakeSelected) {
      return '#eee';
    }
    return '#fff';
  }};

  &:hover {
    background: #eee;
  }
`;
