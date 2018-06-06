import {FETCH_POSTS} from '../actions/index';
const INITIAL_STATE={all:[],post:null};//WE ARE GOING TO HAVE AN INITIAL ARRAY WHICH WILL HOLD ALL OIR POSTS AND A STATE CALLED POST TO HOLD CURENT POST
export default function(state=INITIAL_STATE,action){
  switch (action.type) {
    case FETCH_POSTS:
       return {...state,all:action.payload.data};
    default:
    return  state;

  }
}
