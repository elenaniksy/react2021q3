import React from 'react';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className={'app__wrapper'}>
      {/* todo: implement here 2 components: search bar and card holder with cards in AUX wrapper*/}
      <h1 className={'header'}>My React and TypeScript App!</h1>
      <p className={'date'}>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default App;
