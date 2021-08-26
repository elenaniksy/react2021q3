import { IStoreState } from '../../interfaces/IStoreState';

//example for Action, should be defined for every action
interface ActionA {
  type: 'a';
  a: string;
}

type Action = ActionA; // implement different action types by |

const initialState: IStoreState = {
  articles: [],
  isLoading: true,
};

export default function articlesReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
