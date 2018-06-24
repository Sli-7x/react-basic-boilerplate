import * as React from 'react';
import { Container, Content, LoaderStyle } from './Loader.style';

export interface ILoaderProps {
  isLoading: boolean;
  full?: boolean;
}

export interface ILoaderState {
  isLoading: boolean;
  time: number;
}

export class Loader extends React.Component<ILoaderProps, ILoaderState> {
  static defaultProps = {
    full: false,
  };

  private timer: any = null;
  private delay: number = 150;

  constructor(props: ILoaderProps) {
    super(props);
    this.state = {
      isLoading: false,
      time: 0,
    };
  }

  componentDidMount() {
    if (this.props.isLoading) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.setState({ isLoading: true });
      }, this.delay); // tslint:disable-line
    } else {
      clearTimeout(this.timer);
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({ isLoading: false });
  }

  render() {
    if (!this.state.isLoading) {
      return null;
    }
    return (
      <Container full={this.props.full === false ? false : true}>
        <Content>
          <LoaderStyle />
        </Content>
      </Container>
    );
  }
}
