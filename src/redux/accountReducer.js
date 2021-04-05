import { ACTION_DEPOSIT, ACTION_WITHDRAWAL } from "./actions";

const defaultState = {
  checking: 12,
  savings: 127
};

function account(state = defaultState, action) {
  switch (action.type) {
    case ACTION_DEPOSIT:
      return {
        ...state,
        [action.account]: state[action.account] + action.amount
      };
    case ACTION_WITHDRAWAL:
      return {
        ...state,
        [action.account]: state[action.account] - action.amount
      };
    default:
      return state;
  }
}

export default account;
