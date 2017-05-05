import ReactDOM from 'react-dom';

import './styles/layout.css';
import './styles/form.css';
import './styles/button.css';
import './styles/icons.css';
import './styles/common.css';
import './index.css';

import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
