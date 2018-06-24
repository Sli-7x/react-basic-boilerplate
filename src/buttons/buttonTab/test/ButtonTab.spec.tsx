import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ButtonTab, IButtonTabProps } from '../ButtonTab';

describe('ButtonTab', () => {
  const onClick = jest.fn();

  const props: IButtonTabProps = {
    onClick,
    value: '',
    name: '',
    list: [
      {
        id: 1,
        title: 'test',
      },
    ],
  };

  it('should render correctly', () => {
    const tree = renderer.create(<ButtonTab {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick property', () => {
    const wrapper = shallow(<ButtonTab {...props} />);
    const instance = wrapper.instance() as ButtonTab;
    instance.handleClick('test');
    expect(onClick).toHaveBeenCalled();
  });

  describe('shouldComponentUpdate()', () => {
    it('should not update component', () => {
      const wrapper = mount(<ButtonTab {...props} />);
      const instance = wrapper.instance() as ButtonTab;

      const shouldUpdate = instance.shouldComponentUpdate(props);
      expect(shouldUpdate).toBe(false);
    });

    it('should update component', () => {
      const wrapper = mount(<ButtonTab {...props} />);
      const instance = wrapper.instance() as ButtonTab;

      const shouldUpdate = instance.shouldComponentUpdate({ ...props, value: 'other' });
      expect(shouldUpdate).toBe(true);
    });
  });
});
