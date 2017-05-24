import TotalPrice from '../../TotalPrice/TotalPrice';
import PreviewHOC from '../../HOC/PreviewHOC/PreviewHOC';

import './TotalPricePreview.css';

export default PreviewHOC('total', 'total-price-preview')(TotalPrice);