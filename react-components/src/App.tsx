import React from 'react';
import './app.scss';

const App = () => {
  return (
    <div>
      <h1 className={'header'}>My React and TypeScript App!</h1>
      <p className={'date'}>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default App;
