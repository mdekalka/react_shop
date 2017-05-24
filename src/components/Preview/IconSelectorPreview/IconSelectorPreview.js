import React from 'react';

import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './IconSelectorPreview.css';

const IconSelector = ({ nodeRef, onIconToggle, formState }) => {
  return (
    <div className="avatar-icon pointer" onClick={onIconToggle} ref={nodeRef} >
      <img src={formState.image.source} alt="icon food choose" />
    </div>
  )
};

export default PreviewHOC('icon-selector', 'icon-selector-preview')(IconSelector);

