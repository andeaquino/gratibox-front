import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cadastro">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
