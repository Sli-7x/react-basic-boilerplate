import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Select, ISelectProps } from '../Select';

describe('Select', () => {
  const props: ISelectProps = {
    list: [
      {
        id: 1,
        title: 'test',
      },
    ],
    onChange: jest.fn(),
    value: null,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Select {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should cover when found match value in list', () => {
      const tree = renderer.create(<Select {...props} value={1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('componentWillReceiveProps', () => {
    it('should cover componentWillReceiveProps when match not found', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.setState = jest.fn();
      instance.componentWillReceiveProps(props);
      expect(instance.setState).toHaveBeenCalled();
    });

    it('should cover componentWillReceiveProps when match found', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.scrollToValue = jest.fn();
      instance.setState = jest.fn();

      instance.componentWillReceiveProps({ ...props, value: 1 });
      expect(instance.setState).toHaveBeenCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('should call resetState()', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.resetState = jest.fn();
      instance.componentWillUnmount();
      expect(instance.resetState).toHaveBeenCalled();
    });
  });

  describe('setBodyScroll', () => {
    it('should set overflow hidden if showList = false', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.setState({ showList: false });
      instance.resetState = jest.fn();
      instance.setBodyScroll();
      expect(instance.resetState).not.toHaveBeenCalled();
    });

    it('should set overflow visible if showList = true', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.setState({ showList: true });
      instance.resetState = jest.fn();
      instance.setBodyScroll();
      expect(instance.resetState).not.toHaveBeenCalled();
    });
  });

  describe('toogleList', () => {
    it('should call setState if showList hidden', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.setState({ showList: false });
      instance.foundSelected = jest.fn();
      instance.setState = jest.fn();
      instance.toogleList();
      expect(instance.setState).toHaveBeenCalled();
    });

    it('should call resetState()', () => {
      const wrapper = shallow(<Select {...props} value={1} />);
      const instance = wrapper.instance() as Select;
      instance.setState({ showList: true });
      instance.resetState = jest.fn();
      instance.toogleList();
      expect(instance.resetState).toHaveBeenCalled();
    });
  });
});
