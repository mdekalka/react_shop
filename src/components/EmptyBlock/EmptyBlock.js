import React from 'react';
import PropTypes from 'prop-types';

const EmptyBlock = (props) => {
  return (
    <div className="empty-container">{props.title}</div>
  )
};

EmptyBlock.propTypes = {
  title: PropTypes.string
};

EmptyBlock.defaultProps = {
  title: ''
};

export default EmptyBlock;