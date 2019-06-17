import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)