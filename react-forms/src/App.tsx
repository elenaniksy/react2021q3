import React from 'react';
import classes from './App.module.scss';
import { RenderType } from './models/RenderType';
import Form from './components/form/Form';

class App extends React.Component {
  render(): RenderType {
    return (
      <main className={classes.container}>
        <h1 className={classes.header}>TASK II: &lt;React Forms&gt;</h1>
        {/* todo: 2 components form, container with values from form */}
        <Form />
      </main>
    );
  }
}

export default App;
