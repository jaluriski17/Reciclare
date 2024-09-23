import { Loadingstate } from "./loading/Loading.state";
import { LoginState } from "./login/LoginState";

export interface AppState {
  register: any;
  loading: Loadingstate;
  login: LoginState;
}
