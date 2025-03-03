import { createContext, useReducer } from "react";
import { ContextType } from "./types/context/ContextType";
import { InitialState, Reducers } from "./config";
import { Props } from "./types/context/PropsType";

const Context = createContext<ContextType>({
  state: InitialState,
  dispatch: () => null,
});

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducers, InitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
