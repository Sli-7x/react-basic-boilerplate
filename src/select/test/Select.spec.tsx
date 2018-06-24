import * as React from 'react';
import { Select, ISelectProps } from '../Select';
import * as renderer from 'react-test-renderer';

describe('Select', () => {
  const props: ISelectProps = {
    list: [
      {
        id: 1,
        title: '',
      },
    ],
    onChange: jest.fn(),
    value: null,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Select {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
