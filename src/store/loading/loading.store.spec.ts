import { createAction } from "@ngrx/store";
import { hiden, show } from "./Loading.action";
import { loadingReducer } from "./Loading.reducers"
import { Loadingstate } from "./Loading.state";

describe('Loading store', () => {

  it('show', () => {
    const initialState: Loadingstate = {show: false};
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({show: true});
  })

  it('hide', () => {
    const initialState: Loadingstate = {show: true};
    const newState = loadingReducer(initialState, hiden());

    expect(newState).toEqual({show: false});
  })

  it('should keep state if action is unknown', () => {
    const initialState: Loadingstate = {show: true};
    const action = createAction("UNKNOWN")
    const newState = loadingReducer(initialState, action());

    expect(newState).toEqual({show: true});
  })
})

