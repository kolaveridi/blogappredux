import axios from 'axios';
export const FETCH_POSTS='FETCH_POSTS';
const ROOT_URL='https://reduxblog.herokuapp.com/api';
const API_KEY='?key=abcdef';

export function fetchposts(){
  const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type:FETCH_POSTS,
    payload:request
  };
}
