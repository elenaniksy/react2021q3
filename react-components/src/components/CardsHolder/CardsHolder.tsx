import React from 'react';
import './cardsHolder.scss';
import { CardsHolderStateModel } from '../Models/CardsHolderStateModel';
import { CardItemModel } from '../Models/CardItemModel';
import Card from '../card/Card';

type CardsHolderProps = {};
type CardsHolderState = CardsHolderStateModel;

class CardsHolder extends React.Component<CardsHolderProps, CardsHolderState> {
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
            return (
              <Card
                key={index}
                // @ts-ignore
                name={card.name}
                image={card.image}
                author={card.author}
                behance={card.behance}
                project={card.project}
                views={card.views}
                likes={card.likes}
              />
            );
          })
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}

export default CardsHolder;
