import RemoveButton from '../../RemoveButton/RemoveButton';
import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './RemoveButtonPreview.css';

export default PreviewHOC('remove-btn', 'align-left remove-btn-preview')(RemoveButton);