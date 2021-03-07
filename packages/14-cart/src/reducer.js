const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_COMPLETE":
      return { ...state, loading: false, cart: action.payload }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      }
    case "CLEAR_CART":
      return { ...state, cart: [] }
    case "CALCULATE_TOTAL":
      return {
        ...state,
        total: state.cart
          .reduce(
            (partialSum, item) => partialSum + item.price * item.amount,
            0
          )
          .toFixed(2),
      }
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      }
    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter(item => item.amount !== 0),
      }
    default:
      throw new Error("No such action type")
  }
}

export default reducer
