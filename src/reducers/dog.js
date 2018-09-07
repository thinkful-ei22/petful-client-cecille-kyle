import {
  ADOPT_DOG_ERROR,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_REQUEST,
  FETCH_DOG_ERROR,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_REQUEST
} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const dogReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
    case FETCH_DOG_SUCCESS: {
      return Object.assign({}, state, {
        data: action.dog,
        error: null,
        loading: false
      })
    }
    case FETCH_DOG_ERROR: {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
    case ADOPT_DOG_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        loading: true
      })
    }
    case ADOPT_DOG_SUCCESS: {
      return Object.assign({}, state, {
        data: null,
        error: null,
        loading: false
      })
    }
    case ADOPT_DOG_ERROR: {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
    default: {
      return state;
    }
  }
}
