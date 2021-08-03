import React from 'react';
import './cardsHolder.scss';
import { CardsHolderStateModel } from '../Models/CardsHolderStateModel';

class CardsHolder extends React.Component {
  constructor(props: any) {
    super(props);

    const state: CardsHolderStateModel = {
      data: null,
    };
  }

  componentDidMount(): void {
    fetch('./cards.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div className={'cards-holder'}></div>;
  }
}

export default CardsHolder;
