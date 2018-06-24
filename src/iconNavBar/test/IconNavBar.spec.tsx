import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { IIconNavBarProps, IconNavBar } from '../IconNavBar';

describe('IconNavBar', () => {
  const onSelect = jest.fn();
  const props: IIconNavBarProps = {
    onSelect,
    value: '',
    name: '',
    list: [
      {
        id: '1',
        title: 'test',
        icon: 'random',
      },
    ],
  };

  it('should render correctly', () => {
    const tree = renderer.create(<IconNavBar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should cover onClick method', () => {
    const tree = shallow(<IconNavBar {...props} />);
    const instance = tree.instance() as IconNavBar;
    instance.onClick('test');
    expect(onSelect).toHaveBeenCalled();
  });

  it('should cover when onSelect() prop not passed', () => {
    const newProps = { ...props };
    delete newProps.onSelect;
    const tree = renderer.create(<IconNavBar {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should cover when prop.keys passed', () => {
    const newProps = { ...props };
    newProps.keys = { id: 'id', title: 'title', icon: 'icon' };
    const tree = renderer.create(<IconNavBar {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
