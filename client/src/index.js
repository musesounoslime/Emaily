import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
import reducers from './reducers';

//For Test use
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
<Provider store={store}><App /></Provider>
);

// console.log('KEY:',process.env.REACT_APP_STRIPE_KEY);
// console.log('ENV:',process.env.NODE_ENV);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
