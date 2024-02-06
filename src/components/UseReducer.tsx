import { useReducer } from "react";

const initialState = {count: 0};

export default function UseReducer() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: { count: number }, action: { type: string }) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  return (
    <>
      { console.log("state", state) }
      Count: {state.count}
      <span> | </span>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <span> | </span>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}