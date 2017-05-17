import React, { Component } from 'react';
import PropTypes  from 'prop-types';

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

  render() {
    return this.shouldBeClosed() ? <div/> : (
      <div>
        <div className="modal-container" style={this.props.defaultStyles.overlay}></div>
        <div className="modal" style={Object.assign({}, this.props.defaultStyles.content, this.props.bounds)}>{this.props.children}</div>
      </div>
    )
  }
};

export default ModalPortal;