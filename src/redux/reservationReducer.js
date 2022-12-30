import axios from 'axios';
import BaseUrl from './base_url';

const REQUEST_RESERVATION = 'REQUEST_RESERVATION';
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const initialState = [];

export const requestReservation = (data) => ({
  type: REQUEST_RESERVATION, payload: data,
});

export const fetchFreelancers = (data) => ({
  type: GET_RESERVATIONS, payload: data,
});

export const requestReservationAction = (params) => async (dispatch) => {
  await fetch(`${BaseUrl}api/v1/reservations`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(requestReservation(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getReservationsAction = () => async (dispatch) => {
  await axios.get(`${BaseUrl}api/v1/reservations`, { headers: { Authorization: localStorage.getItem('token') } })
    .then((res) => {
      dispatch(fetchFreelancers(res.data));
    });
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RESERVATION:
      return action.payload;
    case GET_RESERVATIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reservationReducer;