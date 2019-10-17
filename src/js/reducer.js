import { combineReducers } from 'redux';
import * as activeTypes from './activeTypes';

const initial = {
  isLoading:  false,
  isSignIn:  false,
  editDone: false,
  firePosts: [],
  firePost: {},
  tagList:[],
  uid: '',
};

function userReducer(state = initial, action) {
  switch (action.type) {
    case activeTypes.IS_SIGNIN: {
      return {
        ...state,
        isSignIn: true,
      };
    }
    case activeTypes.GET_UID_SUCCESS: {
      return {
        ...state,
        uid: action.data,
      };
    }
    case activeTypes.IS_SIGNOUT: {
      return {
        ...state,
        isSignIn: false,
      };
    }
    default:
      return state;
  }

}
function apiReducer(state = initial, action) {
  switch (action.type) {
    case activeTypes.IS_LODING: {
      return {
        ...state,
        isLoading: true,
        editDone: false,
      };
    }
    case activeTypes.GET_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        firePost: action.data,
      };
    }
    case activeTypes.GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        firePosts: action.data,
      };
    }
    case activeTypes.GET_TAGS_SUCCESS: {
      return {
        ...state,
        tagList: action.data,
      };
    }
    case activeTypes.UPDATE_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: action.data,
      };
    }
    case activeTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: action.data,
      };
    }
    case activeTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: {
          title: '',
          author: '',
          body: '',
        },
      };
    }
    default:
      return state;
  }

}

const reducers = combineReducers({
  api: apiReducer,
  user: userReducer,
});


export default reducers;
