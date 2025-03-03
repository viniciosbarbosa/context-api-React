import { ActionType } from "../config";
import { ThemeState } from "../types/theme/ThemeType";

const themeInitialState: ThemeState = {
  theme: "dark",
};

const themeReducer = (state: ThemeState, action: ActionType): ThemeState => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { theme: action.payload };

    default:
      return state;
  }
};

export { themeInitialState, themeReducer };
