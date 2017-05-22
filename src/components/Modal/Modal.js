import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';

import './Modal.css';

const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

class Modal extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  static defaultProps = {
    styles: {}
  };

  static defaultStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, .45)'
    },
    content: {
      position: 'absolute',
      zIndex: 10000
    }
  };

  componentDidMount() {
    this.node = document.createElement('div');

    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.renderPortal(newProps);
  }

  componentWillUnmount() {
    this.removePortal();
  }

  renderPortal(props) {
    if (props.isOpen) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }

    this.portal = renderSubtreeIntoContainer(this,
      <ModalPortal modalRef={props.modalRef} {...props} defaultStyles={Modal.defaultStyles} />, this.node)
  }

  removePortal () {
    ReactDOM.unmountComponentAtNode(this.node);

    document.body.removeChild(document.querySelector('.modal-container'));
    document.body.classList.remove('open');
  }

  render() {
    return null;
  }
};

export default Modal;