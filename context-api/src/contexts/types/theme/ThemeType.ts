type ThemeState = {
  theme: "light" | "dark";
};

type ChangeTheme = {
  type: "CHANGE_THEME";
  payload: ThemeState["theme"];
};

type ThemeAction = ChangeTheme;

export type { ThemeState, ThemeAction };
