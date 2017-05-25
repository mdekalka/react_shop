export default {
  key: 'add-btn',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'You can handle multiple inputs using more <a class="link" target="_blank" href="https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs">smart way</a>. Add <code>name</code> attribute to each element and create <span class="highlight">one</span> handler for setting value based on name attribute.'
        },
        {
          id: 2,
          type: 'prism',
          data: "class MultipleInputs extends Component {\n  state = {\n    name: 'NoNameNPC',\n    numberOfSubs: 0\n  }\n\n  handleChange = (event) => {\n    const target = event.target;\n    // Here you have 'name' of the input element that you defined in JSX\n    const targetName = target.name;\n    this.setState({ [targetName]: target.value });\n  }\n  \n  render() {\n    return (\n      <form>\n      \t<label>Name:\n      \t  <input \n      \t  \tname=\"name\" \n      \t\ttype=\"text\"\n      \t\tonChange={this.handleChange}\n      \t\tvalue={this.state.name} />\n      \t</label>\n      \t<br />\n      \t<label>Number of subscribers:\n      \t  <input \n      \t\tname=\"numberOfSubs\"\n      \t\ttype=\"number\"\n      \t\tonChange={this.handleChange}\n      \t\tvalue={this.state.numberOfSubs} />\n      \t</label>\n      </form>\n    )\n  }\n};"
        }
      ]
    }
  ]
};

