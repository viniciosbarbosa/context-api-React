import { ActionType } from "../config";
import { UserState } from "../types/user/UserType";

const userInitialState: UserState = {
  user: null,
};

const userReducer = (state: UserState, action: ActionType): UserState => {
  switch (action.type) {
    case "SIGNIN":
      return action.payload;
    case "SIGNOUT":
      return userInitialState;

    default:
      return state;
  }
};

export { userInitialState, userReducer };
