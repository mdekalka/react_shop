import React from 'react';

import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './AddButtonPreview.css';

const AddButton = ({ nodeRef, formState, title }) => {
  return <button className="btn" type="submit" disabled={!formState.name || !formState.price} ref={nodeRef} >{title}</button>
};

export default PreviewHOC('add-button-preview')(AddButton);