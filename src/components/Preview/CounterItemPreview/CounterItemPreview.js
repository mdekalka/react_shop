import Counter from '../../Counter/Counter.js';
import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

export default PreviewHOC('item-counter', 'item-counter-preview')(Counter);