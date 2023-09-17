/* eslint-disable no-fallthrough */
import { createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      }
      return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount};
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const store= createStore(reducer);
// store.dispatch({type: 'account/deposit', payload: 500})
// console.log('Hey Redux');
// console.log(store.getState())
// store.dispatch({type: 'account/withdraw', payload: 200})
// console.log(store.getState());
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: {amount: 1000, purpose: "Buy a car"},
// })
// console.log(store.getState())
// store.dispatch({
//   type: 'account/payLoan', 
// })
// console.log(store.getState());

const deposit = (amount) =>{
return {type : "account/deposit", payload: amount};
}
const withdraw = (amount) => {
return {type: "account/withdraw", payload: amount};
}
const requestLoan = () => {

}
const payLoan = () => {

}
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(400));
console.log(store.getState());