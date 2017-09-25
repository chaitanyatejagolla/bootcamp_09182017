import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Calculator } from './components/calculator';


const createAddAction = value => ({ type: 'ADD', value });
const createSubtractAction = value => ({ type: 'SUBTRACT', value });
const createMultilpyAction = value => ({ type: 'MULTIPLY', value });
const createDivideAction = value => ({ type: 'DIVIDE', value });

const calcReducer = (state = { result: 0 }, action) => {

  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
    case 'ADD':
      return { ...state, result: state.result + action.value };
    case 'SUBTRACT':
      return { ...state, result: state.result - action.value };
    case 'MULTIPLY':
      return { ...state, result: state.result * action.value };
    case 'DIVIDE':
      return { ...state, result: state.result / action.value };
    default:
      return state;
  }
};

const createStore = reducer => {

  let currentState = undefined;
  const subscriptions = [];

  return {
    getState: () => currentState,
    subscribe: cb => subscriptions.push(cb),
    dispatch: action => {
      currentState = reducer(currentState, action);
      subscriptions.forEach(cb => cb());
    },
  };

};

const store = createStore(calcReducer);

store.subscribe(() => {
  ReactDOM.render(<Calculator result={store.getState().result} add={add} subtract={subtract} multiply={multiply} divide={divide} />, document.querySelector('main'));
});

const bindActionCreators = (actionMap, dispatch) => {

  const actions = {};

  Object.keys(actionMap).forEach(actionKey => {
    actions[actionKey] = (...value) => dispatch(actionMap[actionKey](...value));
  });

  return actions;
};

const { add, subtract, multiply, divide } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction,
  multiply: createMultilpyAction,
  divide: createDivideAction,
}, store.dispatch);


ReactDOM.render(<Calculator result={store.getState() && store.getState().result} add={add} subtract={subtract} multiply={multiply} divide={divide} />, document.querySelector('main'));