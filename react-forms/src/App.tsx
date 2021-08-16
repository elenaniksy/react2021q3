import React from 'react';
import classes from './App.module.scss';
import { RenderType } from './models/RenderType';
import Form from './components/form/Form';
import TextParagraph from './components/TextParagraph/TextParagraph';
import { StateModel } from './models/StateModel';

interface AppStateModel {
  name: string;
  birthday: string;
  gender: string;
  selectCountry: string;
  update: boolean;
}

class App extends React.Component<any, AppStateModel> {
  constructor(props: never) {
    super(props);
    this.handleClick.bind(this);
  }
  state: AppStateModel = {
    name: '',
    birthday: '',
    gender: '',
    selectCountry: '',
    update: false,
  };

  handleClick = (event: React.FormEvent<HTMLFormElement>, state: StateModel): StateModel => {
    event.preventDefault();
    this.setState({
      name: state.formControls.name.value,
      birthday: state.formControls.birthday.value,
      gender: state.gender,
      selectCountry: state.selectCountry,
      update: true,
    });

    return state;
  };

  reset(): void {
    this.setState({
      name: '',
      birthday: '',
      gender: '',
      selectCountry: '',
      update: false,
    });
  }

  render(): RenderType {
    return (
      <main className={classes.container}>
        <h1 className={classes.header}>TASK II: &lt;React Forms&gt;</h1>
        <Form onSubmit={this.handleClick} />
        {this.state.update ? (
          <TextParagraph
            value={this.state.name}
            birthday={this.state.birthday}
            gender={this.state.gender}
            country={this.state.selectCountry}
          />
        ) : null}
        {this.reset}
      </main>
    );
  }
}

export default App;
