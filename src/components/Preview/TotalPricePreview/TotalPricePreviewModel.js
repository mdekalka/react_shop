export default {
  key: 'total',
  data: [
    {
      id: 1,
      key: 'react',
      title: 'React',
      content: [
        {
          id: 1,
          type: 'html',
          data: 'Do not place <span class="highlight">business logic</span> directly in React components, create separate service/utils/etc. files and place common login in here.'
        },
        {
          id: 2,
          type: 'prism',
          data: "// Service file(module)\nexport const totalPrice = (count, price) => {\n  return count * parseFloat(price, 10);\n}\n\nexport const getTotal = (list) => {\n  return list.reduce((acc, value) => {\n    return acc + totalPrice(value.count, value.price);\n  }, 0);\n};\n\n// Simple component\nimport { getTotal } from '../CartService.js';\n\nclass List extends Component {\n  render() {\n\tconst total = getTotal([{count: 2, price: 10}, {count: 5, price: 10}]);\n    \n    // return JSX with {total} value\n  }\n}\n\n// Another component\nimport { totalPrice } from '../CartService.js';\n\nclass ListItem extends Component {\n  render() {\n   const item = {count: 5, price: 1}\n   const itemTotal = totalPrice(item.count, item.price);\n     \n   // return JSX with {itemTotal} value\n  }\n}"
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
          data: 'If you are using Redux, you can create memoized<span class="highlight">selectors</span> to retrieve data from store using <a class="link" href="https://github.com/reactjs/reselect" target="_blank">Reselect</a>. '
        },
        {
          id: 2,
          type: 'prism',
          data: "// selectors.js\nimport { createSelector } from 'reselect';\n\nimport { getTotal } from '../../components/Cart/CartService';\n\nconst getCartList = (state) => state.shopCart.cartList;\n// Return list selector\nexport const selectCartList = createSelector(getCartList, (cartList) => cartList);\n// Return total price based on list selector\nexport const selectTotalPrice = createSelector([getCartList], (cartList) => {\n  return getTotal(cartList);\n});\n\n// component module\nimport { selectCartList, selectTotalPrice } from './selectors';\n\nconst mapStateToProps = (state) => {\n    return {\n      \t// return memoized selectors from store\n        cartList: selectCartList(state),\n        totalPrice: selectTotalPrice(state),\n      \t// return state from store\n        isFetching: state.shopCart.isFetching,\n        isFailed: state.shopCart.isFailed,\n    }\n};"
        },
        {
          id: 3,
          type: 'link',
          data: [
            {
              id: 1,
              title: 'Computing Derived Data Redux documentation',
              href: 'http://redux.js.org/docs/recipes/ComputingDerivedData.html',
            },
            {
              id: 2,
              title: 'React, Reselect and Redux',
              href: 'https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c'
            }
          ]
        }
      ]
    }
  ]
};

