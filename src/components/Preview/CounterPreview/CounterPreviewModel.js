export default {
  key: 'counter',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'You should create <span class="highlight">Counter</span> component as <a href="https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components" target="_blank">stateless</a> (functional) component. This feature should encourage you for creation simple, <span class="highlight">reusable</span> components. Easy to use, reuse, understand and testing.'
        },
        {
          id: 2,
          type: 'prism',
          data: 'const Counter = ({ onClick, currentCount }) => {\n  // passing props, no local state\n  return (\n    <div className=\"counter-container\">\n      <div className=\"icon-dec pointer\" onClick={() => onClick(false)}>-</div>\n      {currentCount}\n      <div className=\"icon icon-inc pointer\" onClick={() => onClick(true)}>+</div>\n    </div>\n  )\n};\n'
        },
        {
          id: 3,
          type: 'html',
          data: 'But sometimes you need to insert custom layout into you component to make it <span class="highlight">highly reusable</span>. You can place any html in the component itself and use <code>this.props.children</code> to insert it.'
        },
        {
          id: 4,
          type: 'prism',
          data: 'const Counter = ({ onClick, children }) => {\n  // passing props, no local state\n  return (\n    <div className=\"counter-container\">\n      <div className=\"icon-dec pointer\" onClick={() => onClick(false)}>-</div>\n      {children}\n      <div className=\"icon icon-inc pointer\" onClick={() => onClick(true)}>+</div>\n    </div>\n  )\n};\n\n// ...\n<Counter onClick={/*pass handler*/} />\n  <div className=\"any-custom-layout\">*+$ {/*count value */} $+*</div>\n</Counter>\n\n'
        },
        {
          id: 5,
          type: 'link',
          data: [
            {
              id: 1,
              title: 'Presentational and Container Components by Dan Abramov',
              href: 'https://medium.com/@dan_abramov/smdart-and-dumb-components-7ca2f9a7c7d0',
            },
            {
              id: 2,
              title: 'Stateful vs Stateless Components by Juan Guardado',
              href: 'https://medium.com/@juanguardado/stateful-vs-stateless-components-444b5aa21865'
            }
          ]
        }
      ]
    }
  ]
};