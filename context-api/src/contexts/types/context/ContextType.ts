import { ActionType, InitalStateType } from "../../config";

export type ContextType = {
  state: InitalStateType;
  dispatch: React.Dispatch<ActionType>;
};
