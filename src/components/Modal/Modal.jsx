import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return createPortal(
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
