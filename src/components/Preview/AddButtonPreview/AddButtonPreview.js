import AddButton from '../../AddButton/AddButton';
import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './AddButtonPreview.css';

export default PreviewHOC('add-btn', 'align-left add-btn-preview')(AddButton);