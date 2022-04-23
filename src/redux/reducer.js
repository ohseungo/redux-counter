import { INCREMENT, DECREMENT, INPUT } from "./action";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case INPUT:
      return {
        ...state,
        counter: action.number,
      };
    default:
      return state;
  }
};

export default counterReducer;
