import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as ReactModal from 'react-modal';
import { Modal } from '../Modal';

ReactModal.setAppElement('body');

describe('Modal', () => {
  const onClose = jest.fn();
  const props = {
    onClose,
    open: false,
    modalStyle: {},
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Modal {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('onClose', () => {
    it('should close modal', () => {
      const wrapper = mount(<Modal onClose={onClose} open={true} />);
      const instance = wrapper.instance() as Modal;
      instance.onClose(true);
      expect(onClose).toHaveBeenCalled();
    });
  });
});
