import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { SvgRuler, SvgBath, SvgPillow } from '../Svg';

describe('Svg', () => {
  it('should render correctly SvgRuler', () => {
    const tree = renderer.create(<SvgRuler />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly SvgBath', () => {
    const tree = renderer.create(<SvgBath />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly SvgPillow', () => {
    const tree = renderer.create(<SvgPillow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
