import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Loader, ILoaderProps } from '../Loader';

describe('Loader', () => {
  const props: ILoaderProps = {
    isLoading: false,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Loader {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if loading is false', () => {
    const wrapper = mount(<Loader isLoading={true} />);
    const instance = wrapper.instance() as Loader;
    instance.componentDidMount();
    expect(instance.state.isLoading).toBe(false);
  });

  it('should cover componentWillUnmount', () => {
    const wrapper = shallow(<Loader {...props} />);
    const instance = wrapper.instance() as Loader;
    instance.componentWillUnmount();
    expect(instance.state.isLoading).toBe(false);
  });

  it('should render when state loading is true', () => {
    const wrapper = shallow(<Loader {...props} />);
    const instance = wrapper.instance() as Loader;
    instance.setState({ isLoading: true });
    expect(instance.state.isLoading).toBe(true);
  });
});
