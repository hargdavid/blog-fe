import { addTokenToLocalStorage } from "@/helpers/localStorage";
import IJwtResponse from "@/models/api/IJwtResponse";
import ILoginForm from "@/models/api/ILoginForm";
import { loginUserAsync } from "@/services/authenticate";
import { toggleLoggedin } from "@/store/user/reducer";
import { Dispatch } from "@reduxjs/toolkit";

export const loginUserThunk =
  (loginBody: ILoginForm) => async (dispatch: Dispatch) => {
    const jwtBody = await loginUserAsync(loginBody);
    addTokenToLocalStorage(jwtBody as unknown as IJwtResponse);
    dispatch(toggleLoggedin(true));
  };
