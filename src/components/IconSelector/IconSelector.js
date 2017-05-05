import React, { Component } from 'react';

import './IconSelector.css';

class IconSelector extends Component {
  // componentDidMount() {
  //   document.addEventListener('click', this.onDocumentClick);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.onDocumentClick);
  // }

  // onDocumentClick = (event) => {
  //   if (!this.iconSelector.contains(event.target)) {
  //     this.props.onToggle(false);
  //   }
  // }
  
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
}

export default IconSelector;