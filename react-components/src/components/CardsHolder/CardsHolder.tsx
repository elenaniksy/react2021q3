import React from 'react';
import './cardsHolder.scss';
import { CardsHolderStateModel } from '../Models/CardsHolderStateModel';
import { CardItemModel } from '../Models/CardItemModel';
import Card from '../card/card';

class CardsHolder extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    fetch('./cards.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className={'cards-holder'}>
        {this.state.data ? (
          this.state.data.map((card: CardItemModel, index: number) => {
            return <Card key={index} name={card.name} />;
          })
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}

export default CardsHolder;
