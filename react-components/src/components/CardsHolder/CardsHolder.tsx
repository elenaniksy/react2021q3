import React from 'react';
import './cardsHolder.scss';
import { CardsHolderStateModel } from '../Models/CardsHolderStateModel';
import { CardItemModel } from '../Models/CardItemModel';
import Card from '../card/Card';

type CardsHolderProps = Record<string, unknown>;

type CardsHolderState = CardsHolderStateModel;
type RenderType = JSX.Element | Array<RenderType> | string | number | boolean | null;

class CardsHolder extends React.Component<CardsHolderProps, CardsHolderState> {
  constructor(props: CardsHolderProps) {
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

  render(): RenderType {
    return (
      <div className={'cards-holder'}>
        {this.state.data ? (
          this.state.data.map((card: CardItemModel, index: number) => {
            return (
              <Card
                key={index}
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
