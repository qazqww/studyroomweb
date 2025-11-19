import axios from './axios';

export const createReservation = (reservation) =>
  axios.post('/reservation', reservation);
export const getReservation = (reserveId) =>
  axios.get('/reservation/${reserveId}');
export const getReservationList = (memberId) =>
  axios.get('/reservation/list/{$memberId}');
export const getEmptyRoomList = () => axios.get('/reservation');
export const getAvailableTimeFromRoom = (roomNo) =>
  axios.get('/reservation/searchby-room/${roomNo}');
export const getAvailableRoomListFromTime = () =>
  axios.get('/reservation/searchby-time');
