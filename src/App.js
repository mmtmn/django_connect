import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'world!';
  const element = <h1>Hello {name}</h1>;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

export default App;
