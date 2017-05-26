export default {
  key: 'remove-btn',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'When <span class="highlight">removing</span> item to the collection -> prefer to create a brand new collection without deleted item instead of modifying the old one.'
        },
        {
          id: 2,
          type: 'prism',
          data: "class Cart extends Component {\n  state = {\n  \tcartList: []\n  }\n\n  onAddItem = (newItem) => {\n    this.setState(prevState => {\n      return {\n        cartList: prevState.cartList.filter(cartItem => cartItem.id !== newItem.id)\n      }\n    });\n  }\n}"
        }
      ]
    },
    {
      id: 2,
      key: 'redux',
      title: 'Redux',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'Third fundamental principle of Redux -> <a class="link" href="http://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions" target="_blank">Changes are made with pure functions</a>, so you should not mutate the state.'
        },
        {
          id: 2,
          type: 'prism',
          data: "const initialState = {\n  cartList: [],\n  isFetching: false,\n  isFailed: false\n};\n\nconst ShopCartReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ON_ITEM_REMOVE':\n      return { ...state, cartList: state.cartList.filter(cartItem => cartItem.id !== action.id) }\n      \n    default:\n      return state;\n  }\n};"
        }
      ]
    }
  ]
};