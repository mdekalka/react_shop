import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimatedCircle from '../../AnimatedCircle/AnimatedCircle';

import './PreviewHOC.css';

const PreviewHOC = (name, className) => (WrappedComponent) => {
  return class PreviewHOC extends Component {
    static propTypes = {
      onCircleClick: PropTypes.func
    };

    static defaultProps = {
      onCircleClick: () => {}
    };

    countBounds() {
      const bounds = this.el.getBoundingClientRect();

      return {
        top: bounds.bottom + document.body.scrollTop || 0,
        left: bounds.left
      };
    }

    onCircleClick = (circle, event) => {
      const bounds = this.countBounds();

      this.props.onCircleClick(name, circle, bounds, event)
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