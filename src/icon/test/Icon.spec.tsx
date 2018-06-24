import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Icon, IIconProps } from '../Icon';

describe('Icon', () => {
  const onClick = jest.fn();
  const props: IIconProps = {
    onClick,
    name: '',
    size: 25,
    style: {},
    title: 'label',
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Icon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
