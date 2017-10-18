import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
