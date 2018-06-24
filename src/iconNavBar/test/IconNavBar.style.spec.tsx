import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Item } from '../IconNavBar.style';

describe('IconNavBar.style', () => {
  describe('Item', () => {
    const props = {
      selected: false,
    };

    it('should render correctly Item', () => {
      const tree = renderer.create(<Item {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should cover when passed selected=true to Item', () => {
      const tree = renderer.create(<Item selected={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
