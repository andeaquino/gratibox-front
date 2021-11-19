import homeimg from "../../assets/home.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <h1>
        Bem vindo ao <bold>GratiBox</bold>
      </h1>
      <h2>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </h2>
      <img src={homeimg} alt={"Home"} />
      <footer>
        <Link to="/cadastro">
          <button>Quero começar</button>
        </Link>
        <Link to="/login">Já sou grato</Link>
      </footer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 40px;
    padding-top: 60px;
    text-align: center;
    font-weight: 500;
  }

  h2 {
    text-align: center;
    padding: 0 80px 30px;
    font-weight: 300;
    color: #ffffff;
  }

  img {
    height: 360px;
    width: 100vw;
  }

  footer {
    height: 100%;
    width: 100%;
    background-color: #4d65a8;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;

    button {
      background-color: #8c97ea;
      width: 100%;
      height: 45px;
      border-radius: 10px;
      padding: 0 40px;
      font-weight: 700;
      color: #ffffff;
      font-size: 18px;
      margin-bottom: 20px;
    }

    a {
      font-weight: 700;
      color: #ffffff;
      font-size: 18px;
    }
  }
`;
