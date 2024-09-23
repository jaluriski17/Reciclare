import { createReducer, on, Action } from "@ngrx/store";
import { hiden, show } from "./Loading.action";
import { Loadingstate } from "./Loading.state";


const inirialstate: Loadingstate = {
  show: false
}


const reducer = createReducer(
  inirialstate,
on(show, () =>{
  return{show: true};
}),
 on(hiden, () =>{
  return {show: false};
 })
);

export function loadingReducer(state: Loadingstate, action: Action){
  return reducer(state, action);
}


