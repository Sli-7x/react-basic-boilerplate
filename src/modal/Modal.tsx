import * as React from 'react';
import * as ReactModal from 'react-modal';
import { Icon } from '../index';
import { Close, Header, Content } from './Modal.style';

export interface IModalProps {
  title?: string;
  open: boolean;
  maxWidth?: string;
  width?: string;
  modalStyle?: { [key: string]: string | number };
  onClose: (submit: boolean) => any;
  contentLabel?: string;
  closeLabel?: string;
}

export class Modal extends React.Component<IModalProps, {}> {
  static defaultProps: Partial<IModalProps> = {
    title: undefined,
    open: false,
    maxWidth: '835px',
    width: '85%',
    modalStyle: {},
    contentLabel: 'Example Modal',
    closeLabel: 'Close',
  };

  constructor(props: IModalProps) {
    super(props);
  }

  onClose(submit: boolean) {
    this.props.onClose(submit);
  }

  render() {
    const { title, open, maxWidth, width, modalStyle, contentLabel, closeLabel } = this.props;

    return (
      <ReactModal
        isOpen={open}
        onRequestClose={this.onClose.bind(this, false)}
        closeTimeoutMS={0}
        style={{ content: { maxWidth, width, ...modalStyle } }}
        contentLabel={contentLabel}
        portalClassName="ReactModalPortal"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        shouldCloseOnOverlayClick={true}
      >
        <Close onClick={this.onClose.bind(this, false)} title={closeLabel}>
          <Icon name="close" size={25} title={closeLabel} />
        </Close>
        <Header>{title}</Header>
        <Content>{this.props.children}</Content>
      </ReactModal>
    );
  }
}
