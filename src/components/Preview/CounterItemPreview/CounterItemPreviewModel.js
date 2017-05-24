export default {
  key: 'item-counter',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'You should reuse </span class="highlight">Counter</span> component that you have created for the Cart form. This is one main advantages of <span class="highlight">stateless</span> components.'
        },
        {
          id: 2,
          type: 'prism',
          data: "// Simple component\nclass Count extends Component {\n  render() {\n    state = {\n      count: 100\n    }\n    \n    onCountClick = () => {\n      // count logic\n    }\n    \n    return (\n      <Counter onClick={this.onCountClick}>\n      \t<div>{this.state.count}</div>\n      </Counter>\n    )\n  }\n}\n\n// Another component\nclass CountExtend extends Component {\n  render() {\n    state = {\n      count: 0\n    }\n    \n    onCountHandler = () => {\n      // count logic\n    }\n    \n    return (\n      // Provide custom jsx inside component\n      <Counter onClick={this.onCountHandler}>\n      \t<div>'Count value':<span>{this.state.count}</span></div>\n      </Counter>\n    )\n  }\n}\n"
        }
      ]
    }
  ]
};
