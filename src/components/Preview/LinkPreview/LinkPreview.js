import React from 'react';
import { Link } from 'react-router';
import { omit } from 'lodash';

import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './LinkPreview.css';

const LinkPreview = (props) => {
  // TODO: Find better way to omit not default properties
  const finalProps = omit(props, ['nodeRef', 'onCircleClick' , 'isOpen']);

  return (
    <div ref={props.nodeRef} >
      <Link {...finalProps} />
    </div>
  )
};

export default PreviewHOC('link-route', 'align-right link-route-preview')(LinkPreview);

