import styled from 'styled-components';

export const Container = styled.div`
  ${(props: { full: boolean }) =>
    props.full
      ? `
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
  `
      : `
  position: relative;
  padding: 40px 0;
  `} width: 100%;
  height: 100%;

  z-index: 9;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const LoaderStyle = styled.div`
  top: -40px;
  color: #2ab2b6;
  font-size: 11px;
  margin: 0 auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;

  &:before,
  &:after {
    border-radius: 50%;
    width: 27px;
    height: 27px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }

  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
