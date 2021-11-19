import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/cadastro">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
