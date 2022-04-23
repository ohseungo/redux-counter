import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement, input } from "./redux/action";

function App({ onIncrement, onDecrement, onInput, counter }) {
  // const dispatch = useDispatch(); //props 에서 받아오는 것도 가능
  // const handleIncrement = () => {
  //   dispatch(increment());
  // };
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };
  const [newCounter, setNewCounter] = useState(0);
  const handleChange = (e) => {
    setNewCounter(e.target.value);
    onInput(e.target.value);
  };
  return (
    <div className="app">
      <h1 className="counter">{counter}</h1>
      <button className="counterButton" onClick={onIncrement}>
        +
      </button>
      <button className="counterButton" onClick={onDecrement}>
        -
      </button>
      <input
        className="newInput"
        name="newNumber"
        value={newCounter}
        onChange={handleChange}
      />
    </div>
  );
}
// Map Redux state to React Component props
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
// Map dispatch function to React Component props
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInput: (newValue) => dispatch(input(newValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
