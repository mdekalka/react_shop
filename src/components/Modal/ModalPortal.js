import React, { Component } from 'react';
import PropTypes  from 'prop-types';

const MAX_WIDTH = 650;

class ModalPortal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    defaultStyles: PropTypes.object,
    bounds: PropTypes.object
  };

  static defaultProps = {
    defaultStyles: {},
    bounds: {}
  };

  shouldBeClosed () {
    return !this.props.isOpen;
  }

  calculatePosition(bounds) {
    if (this.shouldBeClosed()) {
      return bounds;
    }

    const isModalFits = window.innerWidth > Math.round(MAX_WIDTH + bounds.left);

    if (!isModalFits) {
      // Final left position: left pos. of element - element width - width of modal
      return {...bounds, left: bounds.left + bounds.w - MAX_WIDTH}
    }

    return bounds;
  }

  render() {
    const bounds = this.calculatePosition(this.props.bounds);

    return this.shouldBeClosed() ? <div/> : (
      <div>
        <div className="modal-container" style={this.props.defaultStyles.overlay}></div>
        <div className="modal" ref={this.props.modalRef} style={Object.assign({}, this.props.defaultStyles.content, bounds)}>{this.props.children}</div>
      </div>
    )
  }
};

export default ModalPortal;