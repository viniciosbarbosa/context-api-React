import { ReactElement, useContext } from "react";
import { Context } from "../contexts/Context";

type children = {
  children: ReactElement;
};

const Auth = ({ children }: children) => {
  const { state, dispatch } = useContext(Context);

  const userData = state.userContext.user;

  const handleSignIn = () => {
    dispatch({ type: "SIGNIN", payload: { user: { id: 1, name: "vini" } } });
  };

  const handleSignOut = () => {
    dispatch({ type: "SIGNOUT" });
  };

  return (
    <div>
      {userData ? (
        <>
          <h2>Bem vindo {userData.name}</h2>
          {children}
          <br />
          <button onClick={() => handleSignOut()}>Leslogar</button>
        </>
      ) : (
        <button onClick={() => handleSignIn()}>Logar</button>
      )}
    </div>
  );
};

export default Auth;
