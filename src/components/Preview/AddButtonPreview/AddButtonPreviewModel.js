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
          data: 'When <span class="highlight">adding</span> item to the collection -> prefer to create a brand new collection with new item instead of modifying the old one.'
        },
        {
          id: 2,
          type: 'prism',
          data: "class Cart extends Component {\n  state = {\n  \tcartList: []\n  }\n\n  onAddItem = (newItem) => {\n    this.setState(prevState => {\n      return {\n        cartList: prevState.cartList.concat(newItem) // or [...prevState.cartList. newItem]\n      }\n    });\n  }\n}"
        },
        {
          id: 3,
          type: 'html',
          data: 'Also, to achive persistent data you can use <a class="link" href="https://facebook.github.io/react/docs/update.html" target="_blank">Immutability Helpers</a> or <a class="link" target="_blank" href="https://github.com/facebook/immutable-js">immutable-js</a>.'
        },
        {
          id: 4,
          type: 'link',
          data: [
            {
              id: 1,
              title: 'Pros and Cons of using immutability with React.js',
              href: 'http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/'
            }
          ]
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
          data: "const initialState = {\n  cartList: [],\n  isFetching: false,\n  isFailed: false\n};\n\nconst ShopCartReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ON_ITEM_ADD':\n      // Use object spread operator or Object.assign()\n      return { ...state, cartList: [ ...state.cartList, action.cartItem ] }\n      \n    default:\n      return state;\n  }\n};"
        },
        {
          id: 3,
          type: 'link',
          data: [
            {
              id: 1,
              title: 'Three Principles of Redux',
              href: 'http://redux.js.org/docs/introduction/ThreePrinciples.html#three-principles'
            },
            {
              id: 2,
              title: 'Reducers in Redux',
              href: 'http://redux.js.org/docs/basics/Reducers.html'
            },
            {
              id: 3,
              title: 'Idiomatic Redux: The Tao of Redux, Part 1 by Mark Erikson',
              href: 'http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/'
            },
            {
              id: 4,
              title: 'Idiomatic Redux: The Tao of Redux, Part 2 by Mark Erikson',
              href: 'http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/'
            }
          ]
        }
      ]
    }
  ]
};
