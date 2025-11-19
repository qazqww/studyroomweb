import axios from './axios';

export const createSubject = (subject) => axios.post(`/subject`, subject);
export const getSubject = (subjectId) => axios.get(`/subject/${subjectId}`);
export const getSubjectList = (memberId) =>
  axios.get(`/subject/list/${memberId}`);
export const updateSubject = (subjectId, subject) =>
  axios.put(`/subject/${subjectId}`, subject);
export const deleteSubject = (subjectId) =>
  axios.delete(`/subject/${subjectId}`);
