import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimatedCircle from '../../AnimatedCircle/AnimatedCircle';

import './PreviewHOC.css';

const PreviewHOC = (className) => (WrappedComponent) => {
  return class PreviewHOC extends Component {
    static propTypes = {
      onCircleClick: PropTypes.func
    };

    static defaultProps = {
      onCircleClick: () => {}
    };

    countBounds() {
      const bounds = this.el.getBoundingClientRect();

      // TODO: when scroll is visible, bounds returns value from top of the screen, handle case for scroll height

      return {
        top: bounds.bottom, // top + height
        left: bounds.left
      };
    }

    onCircleClick = (circle, event) => {
      const bounds = this.countBounds();

      this.props.onCircleClick(circle, bounds, event)
    }

    render() {
      return (
        <div className={`preview-block ${className}`}>
          <WrappedComponent nodeRef={(node) => {this.el = node;}} {...this.props} />
          <AnimatedCircle onClick={this.onCircleClick} />
        </div>
      )
    }
  }
};

export default PreviewHOC;