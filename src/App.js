import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import GlobalStyle from "./shared/GlobalStyle";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";

function App() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {userInfo ? <Redirect to="/planos" /> : <Home />}
          </Route>
          <Route exact path="/login">
            {userInfo ? <Redirect to="/planos" /> : <Login />}
          </Route>
          <Route exact path="/cadastro">
            {userInfo ? <Redirect to="/planos" /> : <SignUp />}
          </Route>
          <Route exact path="/planos">
            {userInfo ? <Plans /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
