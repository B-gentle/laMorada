export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
    //calculate apartment price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    //calculate agent and commission
    state.agentFee = addDecimals(Number((state.itemsPrice * 0.5).toFixed(2)))
    //calculate total price
    state.totalPrice = (
      Number(state.itemsPrice) +
      Number(state.agentFee)
    ).toFixed(2)

    localStorage.setItem('cart', JSON.stringify(state))

    return state;
}