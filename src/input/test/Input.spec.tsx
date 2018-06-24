import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Input, IInputProps } from '../Input';

describe('Input', () => {
  const onChange = jest.fn();
  const props: IInputProps = {
    onChange,
    value: '',
    inputStyle: {},
    label: 'label',
    maxLength: 20,
    minLength: 1,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('onChange()', () => {
    it('should call onChange', () => {
      const wrapper = mount(<Input onChange={onChange} value="" />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'test' } });
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('getErrors()', () => {
    it('should cover when string passed', () => {
      const wrapper = shallow(<Input {...props} />);
      const instance = wrapper.instance() as Input;
      const errors = instance.getErrors('test');
      expect(errors).not.toBe(null);
    });

    it('should cover when array passed', () => {
      const wrapper = shallow(<Input {...props} />);
      const instance = wrapper.instance() as Input;
      const errors = instance.getErrors(['test']);
      expect(errors).not.toBe(null);
    });

    it('should do nothing if empty array passed', () => {
      const wrapper = shallow(<Input {...props} />);
      const instance = wrapper.instance() as Input;
      const errors = instance.getErrors([]);
      expect(errors).toBe(undefined);
    });

    it('should do nothing if empty array passed', () => {
      const wrapper = shallow(<Input {...props} errorText={'test'} />);
      const instance = wrapper.instance() as Input;
      expect(instance.props.errorText).toBe('test');
    });
  });
});
