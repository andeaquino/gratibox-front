import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router";

export default function Logout() {
  const { setUserInfo } = useContext(UserContext);
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    if (window.confirm("Tem certeza que deseja sair?")) {
      localStorage.removeItem("user");
      setUserInfo(null);
      history.push("/");
    }
  }
  return (
    <LogoutContainer>
      <BiLogOut size="30" onClick={logout} color="#FFFFFF" />
    </LogoutContainer>
  );
}

const LogoutContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
