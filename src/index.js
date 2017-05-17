import ReactDOM from 'react-dom';

import './styles/scroll.css';
import './styles/tabs.css';
import './styles/layout.css';
import './styles/form.css';
import './styles/prism.css';
import './styles/button.css';
import './styles/format-text.css';
import './styles/icons.css';
import './styles/common.css';
import './index.css';

import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
