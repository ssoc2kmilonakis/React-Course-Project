import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Define your initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  record: null,
};

// Define your reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'FETCH_COURSE_START':
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case 'FETCH_COURSE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        record: action.payload,
      };
    case 'FETCH_COURSE_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'ADD_DATA_START':
      return;
    case 'ADD_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case 'ADD_DATA_ERROR':
      return {
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_COURSE_REQUEST':
      return {
        ...state,
        loading: false,
        error: null,
      };

    case 'UPDATE_COURSE_SUCCESS':
      const updatedCourse = action.payload;

      return {
        ...state,
        record: updatedCourse,
        loading: false,
      };
    case 'UPDATE_COURSE_FAILURE':
      const errorMessage = action.payload;

      return {
        ...state,
        loading: false,
        error: errorMessage,
      };
    case 'DELETE_COURSE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_COURSE_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'DELETE_COURSE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

// Define your action creators
function fetchData() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_DATA_START' });

    axios
      .get('http://localhost:3001/courses')
      .then((response) => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_DATA_ERROR',
          payload: error.message,
        });
      });
  };
}
const deleteCourse = (id) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_COURSE_REQUEST' });
    axios
      .delete(`http://localhost:3001/courses/${id}`)
      .then(() =>
        dispatch({
          type: 'DELETE_COURSE_SUCCESS',
        })
      )
      .catch((error) => {
        dispatch({
          type: 'DELETE_COURSE_ERROR',
          payload: error.message,
        });
      });
  };
};
const fetchSingleCourse = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_COURSE_START' });

    axios
      .get(`http://localhost:3001/courses/${id}`)
      .then((response) => {
        dispatch({
          type: 'FETCH_COURSE_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_COURSE_ERROR',
          payload: error.message,
        });
      });
  };
};

function addData(data) {
  return function (dispatch) {
    dispatch({ type: 'ADD_COURSE_START' });
    axios
      .post('http://localhost:3001/courses', data)
      .then((response) => {
        dispatch({
          type: 'ADD_DATA_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => ({
        type: 'ADD_DATA_ERROR',
        payload: error.message,
      }));
  };
}
export const updateCourse = (id, updatedCourse) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_COURSE_REQUEST' });

    // Make an API request to update the course data
    axios
      .put(`http://localhost:3001/courses/${id}`, updatedCourse)
      .then((response) => {
        // Dispatch an action to update the course data in the store
        dispatch({ type: 'UPDATE_COURSE_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_COURSE_FAILURE', payload: error.message });
      });
  };
};
// Create your store with Redux Thunk middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export { store, fetchData, addData, fetchSingleCourse, deleteCourse };
