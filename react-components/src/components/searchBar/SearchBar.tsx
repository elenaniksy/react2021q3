import React, { ReactNode } from 'react';
import { SearchBarStateModel } from '../Models/SearchBarStateModel';
import './searchBar.scss';

class SearchBar extends React.Component {
  state: SearchBarStateModel = {
    input: {
      type: 'text',
      placeholder: 'Enter text...',
      required: true,
    },
    button: {
      type: 'submit',
      value: '✔',
    },
  };

  render(): ReactNode {
    return (
      <form className={'search-bar'} method={'GET'} action={'#'}>
        <div className={'search-bar__line'}>
          <input
            className={'input__text'}
            type={this.state.input.type}
            placeholder={this.state.input.placeholder}
            required={this.state.input.required}
          />
          <input className={'input__submit'} type={this.state.button.type} value={this.state.button.value} />
        </div>
      </form>
    );
  }
}

export default SearchBar;
