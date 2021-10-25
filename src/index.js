import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Menu } from './components/menu/menu.jsx';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
   
  </React.StrictMode>,
  document.getElementById('root')
);
function FilmFlix(){
render(
  <App />, document.getElementById('Container')
)
}
FilmFlix();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
