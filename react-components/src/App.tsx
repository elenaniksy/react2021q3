import React from 'react';
import './app.scss';
import SearchBar from './components/searchBar/SearchBar';
import CardsHolder from './components/CardsHolder/CardsHolder';

const App: React.FC = () => {
  return (
    <div className={'app__wrapper'}>
      <h1 className={'app__header'}>TASK I: &lt;React Components&gt;</h1>
      <SearchBar />
      <CardsHolder />
    </div>
  );
};

export default App;
