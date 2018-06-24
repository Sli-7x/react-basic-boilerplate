import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IStyledTab, StyledTab } from '../ButtonTab.style';

describe('IconNavBar.style', () => {
  describe('StyledTab', () => {
    const props: IStyledTab = {
      selected: false,
    };

    it('should render correctly Item', () => {
      const tree = renderer.create(<StyledTab {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should cover when passed selected=true to Item', () => {
      const tree = renderer.create(<StyledTab selected={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
