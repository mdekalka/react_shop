import React from 'react';
import { omit } from 'lodash';

const AddButton = (props) => {
  // TODO: Find better way to omit not default properties
  const finalProps = omit(props, ['nodeRef', 'onCircleClick', 'isOpen']);

  return <button type="submit" {...finalProps} ref={props.nodeRef} >{props.children}</button>
};

export default AddButton;