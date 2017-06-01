import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

    isTarget = false;
    isViewed = false;

    countBounds() {
      const bounds = this.el.getBoundingClientRect();

      return {
        top: bounds.bottom + document.body.scrollTop || 0,
        left: bounds.left,
        h: bounds.height,
        w: bounds.width
      };
    }

    clearActiveTarget() {
      if (!this.props.isOpen) {
        this.isTarget = false;
      }
    }

    onCircleClick = (circle, event) => {
      const bounds = this.countBounds();

      this.props.onCircleClick(name, circle, bounds, event);
      this.isTarget = name === event.currentTarget.getAttribute('data-name');
      this.isViewed = true;
    }

    render() {
      this.clearActiveTarget();
      const isActive = this.props.isOpen && this.isTarget;
      const isViewed = this.isViewed && !isActive;
      // TODO: Maybe we can move ref={props.nodeRef} from WrappedComponent to preview-block itself to count boundaries?
      return (
        <div className={classNames(`preview-block ${className}`, {'active': isActive })} >
          <WrappedComponent nodeRef={(node) => {this.el = node;}} {...this.props} />
          <AnimatedCircle name={name} onClick={this.onCircleClick} active={isActive} viewed={isViewed} />
        </div>
      )
    }
  }
};

export default PreviewHOC;