export interface State {
  selectedBlog: any;
}

const initialState = {
  selectedBlog: null,
};

type Action = {
  type: 'SELECT_BLOG';
  payload: string;
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SELECT_BLOG':
      return {
        ...state,
        selectedBlog: action.payload,
      };

    default:
      return state;
  }
};
