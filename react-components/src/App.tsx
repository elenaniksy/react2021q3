import React from 'react';
import './app.scss';
import SearchBar from './components/searchBar/SearchBar';

const App: React.FC = () => {
  return (
    <div className={'app__wrapper'}>
      {/* todo: implement here 2 components: search bar and card holder with cards in AUX wrapper*/}
      <h1 className={'app__header'}>TASK I: &lt;React Components&gt;</h1>
      <SearchBar />
    </div>
  );
};

export default App;
