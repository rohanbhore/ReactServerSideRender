import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

const preloadedState = window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
console.log("preloadedState",preloadedState);

ReactDOM.hydrate(<Home toDoData={preloadedState}/>, document.querySelector("#root"));