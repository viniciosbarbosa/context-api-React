import "./App.css";
import Auth from "./components/Auth";
import Button from "./components/Button";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <div>
        <Auth>
          <Button />
        </Auth>
      </div>
    </ContextProvider>
  );
}

export default App;
