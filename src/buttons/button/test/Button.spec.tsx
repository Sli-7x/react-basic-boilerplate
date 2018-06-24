import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
