import axios from './axios';

export const joinMember = (member) => axios.post('/member', member);
export const findMember = (memberId) => axios.get(`/member/${memberId}`);
export const modifyMember = (memberId, member) =>
  axios.put(`/member/${memberId}`, member);
export const removeMember = (memberId) => axios.delete(`/member/${memberId}`);
