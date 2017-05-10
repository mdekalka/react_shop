import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './IconSelector.css';

class IconSelector extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    list: [],
    isOpen: false,
    onSelect: () => {}
  };

  render() {
    const { list, isOpen, onSelect } = this.props;

    return (
      <div>
        {isOpen ?
          <div className="icon-selector" ref={(node) => {this.iconSelector = node;}}>
            <div className="icon-list">
              {list.map(listItem => 
                <div key={listItem.id} className={`icon-item pointer ${listItem.selected ? 'selected': ''}`} onClick={() => onSelect(listItem)}>
                  <img className="icon-image" src={listItem.source} alt="icon"/>
                </div>
              )}
            </div>
          </div>
          : null
        }
      </div>
    )
  }
};

export default IconSelector;