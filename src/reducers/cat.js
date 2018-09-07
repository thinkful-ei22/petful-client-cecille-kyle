import {
  ADOPT_CAT_ERROR,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_REQUEST,
  FETCH_CAT_ERROR,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST
} from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
    case FETCH_CAT_SUCCESS: {
      return Object.assign({}, state, {
        data: action.cat,
        error: null,
        loading: false
      })
    }
    case FETCH_CAT_ERROR: {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
    case ADOPT_CAT_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        loading: true
      })
    }
    case ADOPT_CAT_SUCCESS: {
      return Object.assign({}, state, {
        data: null,
        error: null,
        loading: false
      })
    }
    case ADOPT_CAT_ERROR: {
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
