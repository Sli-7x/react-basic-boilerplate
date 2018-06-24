import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { StyledInput, IStyledInput } from '../Input.style';

describe('Input.style', () => {
  describe('StyledInput', () => {
    const props: IStyledInput = {
      isInvalid: false,
    };

    it('should render correctly', () => {
      const tree = renderer.create(<StyledInput {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should cover when passed isInvalid=true', () => {
      const tree = renderer.create(<StyledInput isInvalid={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
