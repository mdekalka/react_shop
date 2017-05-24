import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PrismCode } from 'react-prism';
import enhanceWithClickOutside from 'react-click-outside';

import Modal from '../Modal/Modal';

import close from '../../assets/icons/close.svg';
import './ModalContent.css';

const TYPES = {
  HTML: 'html',
  PRISM: 'prism',
  LINK: 'link'
};

class ModalContent extends Component {
  static propTypes = {
    showModal: PropTypes.bool,
    bounds: PropTypes.object,
    content: PropTypes.array
  }

  static defaultProps = {
    showModal: false,
    bounds: {},
    content: []
  }

  handleClickOutside(event) {
    if (this.modal && !this.modal.contains(event.target)) {
      this.props.onClose();
    }
  }

  renderLinks(content) {
    return (
      <ul key={content.id} className="modal-links">{content.data.map(link => <li key={link.id}><a href={link.href} target="_blank">{link.title}</a></li>)}</ul>
    )
  }

  renderCode(content) {
    return <PrismCode key={content.id} className="language-javascript">{content.data}</PrismCode>
  }

  renderHTML(content) {
    return <p key={content.id} className="formatted-paragraph" dangerouslySetInnerHTML={{__html: content.data}}></p>;
  }

  renderHeader(item) {
    return <Tab key={item.id} className={`react-tabs__tab ${item.key}-tab`}>{item.title}</Tab>;
  }

  switchType(data) {
    let finalContent = null;

    switch (data.type) {
      case TYPES.HTML:
        finalContent = this.renderHTML(data);
        break;

      case TYPES.PRISM:
        finalContent = this.renderCode(data);
        break;

      case TYPES.LINK:
        finalContent = this.renderLinks(data);
        break;
      
      default:
        break
    };

    return finalContent;
  }

  renderContent(data) {
    return data.content.map(dataItem => this.switchType(dataItem))
  }

  renderPreview(preview) {
    return (
      <Modal isOpen={this.props.showModal} bounds={this.props.bounds} modalRef={node => this.modal = node} >
        {this.props.showModal ?
          <div className="modal-content">
            <Tabs className="react-tabs notes-tabs">
              {/* TODO: find more optimized way to render multiple JSX tags with saving the structure of resulting HTML*/}
              <TabList>
                {preview.map(item => this.renderHeader(item))}
              </TabList>
              {preview.map(item => <TabPanel key={item.id}>{this.renderContent(item)}</TabPanel>)}
            </Tabs>
            <div className="modal-close icon icon-close pointer" onClick={this.props.onClose}></div>
          </div>
        : null }
      </Modal>
    )
  }

  render() {
    return this.renderPreview(this.props.content);
  }
};

export default enhanceWithClickOutside(ModalContent);

