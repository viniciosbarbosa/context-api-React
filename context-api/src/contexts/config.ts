import { themeInitialState, themeReducer } from "./reducers/theme.reducer";
import { userInitialState, userReducer } from "./reducers/user.reducer";
import { ThemeAction } from "./types/theme/ThemeType";
import { UserAction } from "./types/user/UserType";

//Estado inicial do context
const InitialState = {
  themeContext: themeInitialState,
  userContext: userInitialState,
};

//Exportando todos os reducers
const Reducers = (state: InitalStateType, action: ActionType) => ({
  themeContext: themeReducer(state.themeContext, action),
  userContext: userReducer(state.userContext, action),
});

//Exportando todos os types
export type InitalStateType = typeof InitialState;
export type ActionType = ThemeAction | UserAction;

export { InitialState, Reducers };
