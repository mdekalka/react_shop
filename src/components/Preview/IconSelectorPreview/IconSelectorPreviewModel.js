export default {
  key: 'icon-selector',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'In some cases to improve perfomance you should use <span class="highlight">React.PureComponent</span> instead of <span class="highlight">React.Component</span>. PureComponent changes the life-cycle method <code>shouldComponentUpdate</code> and adds some logic to automatically check whether a re-render is required for the component. This allows a <span class="highlight">PureComponent</span> to call method render only if it detects changes in <code>state</code> or <code>props</code>.'
        },
        {
          id: 2,
          type: 'prism',
          data: "import React, { PureComponent } from 'react';\n\nclass IconSelector extends PureComponent {\n  render() {\n    const { list, isOpen, onSelect } = this.props;\n\n    return (\n\t  <div className=\"icon-list\">\n        {list.map(listItem => \n        <div key={listItem.id} onClick={() => onSelect(listItem)}>\n          <img className=\"icon-image\" src={listItem.source} alt=\"\" />\n        </div>\n      )}\n      </div>\n    )\n  }\n};\n"
        },
        {
          id: 3,
          type: 'html',
          data: 'Use <span class="highlight">React.PureComponent</span> carefully, when you expect to have simple props and state. Also, <span class="highlight">React.PureComponent\'s</span> <code>shouldComponentUpdate()</code> skips prop updates for the whole component subtree. Make sure all the children components are also <span class="highlight">"pure"</span>.'
        },
        {
          id: 4,
          type: 'link',
          data: [
            {
              id: 1,
              title: 'React.PureComponent documentation',
              href: 'https://facebook.github.io/react/docs/react-api.html#react.purecomponent',
            },
            {
              id: 2,
              title: 'Why and How to Use PureComponent in React.js',
              href: 'https://60devs.com/pure-component-in-react.html'
            }
          ]
        }
      ]
    }
  ]
};
