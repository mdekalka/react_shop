import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ onRemove, nodeRef }) => {
  return <div onClick={onRemove} ref={nodeRef} className="icon icon-remove pointer"></div>
};

RemoveButton.propTypes = {
  onRemove: PropTypes.func
};

RemoveButton.defaultProps = {
  onRemove: () => {}
};

export default RemoveButton;
