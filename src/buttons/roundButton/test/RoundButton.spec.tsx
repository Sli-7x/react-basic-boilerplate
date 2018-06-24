import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IRoundButtonProps, RoundButton } from '../RoundButton';

describe('RoundButton', () => {
  const props: IRoundButtonProps = {
    caption: '',
    iconname: '',
    selected: false,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<RoundButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    const tree2 = renderer.create(<RoundButton {...props} selected={true} />).toJSON();
    expect(tree2).toMatchSnapshot();
  });
});
