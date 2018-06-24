import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { OutsideClick, IOutsideClick } from '../OutsideClick';
import { shallow, mount } from 'enzyme';

describe('OutsideClick', () => {
  const onOutside = jest.fn();
  const props: IOutsideClick = {
    onOutside,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<OutsideClick {...props}>Test</OutsideClick>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('componentWillUnmount()', () => {
    it('should call document.removeEventListener', () => {
      document.removeEventListener = jest.fn();
      const wrapper = shallow(<OutsideClick {...props} />);
      const instance = wrapper.instance() as OutsideClick;
      instance.componentWillUnmount();
      expect(document.removeEventListener).toHaveBeenCalled();
    });
  });

  describe('handleClickOutside()', () => {
    it('should not call onOutside()', () => {
      const wrapper = shallow(<OutsideClick {...props} />);
      const instance = wrapper.instance() as OutsideClick;
      const event = new Event('');
      instance.handleClickOutside(event);
      expect(onOutside).not.toHaveBeenCalled();
    });

    it('should call onOutside()', () => {
      const wrapper = shallow(<OutsideClick {...props} />);
      const instance = wrapper.instance() as OutsideClick;
      const w = { contains: () => {} };
      instance.setWrapperRef(w);
      const event = new Event('');
      instance.handleClickOutside(event);
      expect(onOutside).toHaveBeenCalled();
    });
  });
});
