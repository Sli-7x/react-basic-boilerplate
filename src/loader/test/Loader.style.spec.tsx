import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Container } from '../Loader.style';

describe('Loader.style', () => {
  const props = {
    full: false,
  };

  describe('Container', () => {
    it('should render correctly', () => {
      const tree = renderer.create(<Container {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should cover when passed full=true to Container', () => {
      const tree = renderer.create(<Container full={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
