import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GameContainer from './components/game_container'

ReactDOM.render(
  <React.Fragment>
    <GameContainer/>
  </React.Fragment>,
  document.getElementById('root')
);


reportWebVitals();
