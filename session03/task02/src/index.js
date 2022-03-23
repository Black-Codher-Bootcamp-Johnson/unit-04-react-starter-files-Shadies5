import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="Fola" bio="learning at blackcodher bootcamp" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

