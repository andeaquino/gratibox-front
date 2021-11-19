import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm, useHistory } from "react-hook-form";
import { signUp } from "../../services/API";

export default function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const { name, email, password } = data;

    const body = {
      name,
      email,
      password,
    };

    signUp({ body })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert("Email já está em uso!");
        }
      });
  };

  return (
    <RegisterContainer>
      <h1>
        Bem vindo ao <bold>GratiBox</bold>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Senha"
          {...register("password", { required: true })}
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPass", { required: true })}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/login">Já é grato? Entre agora!</Link>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  height: 462px;
  margin-top: calc(50vh - 231px);
  padding: 0 25px;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 500;
  }

  input {
    display: block;
    width: 100%;
    height: 58px;
    margin: 0 auto 10px;
    padding: 0 15px;
    border: 1px solid #604848;
    border-radius: 10px;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "#FFFFFF")};
    color: ${({ loading }) => (loading ? "#AFAFAF" : "#000000")};
    font-size: 24px;
    font-weight: 500;
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
    ::placeholder {
      font-family: "Roboto", sans-serif;
      color: rgba(96, 72, 72, 0.4);
      font-weight: 500;
    }
  }
  button {
    display: block;
    width: 60vw;
    height: 56px;
    margin: 60px auto 0;
    background-color: #8c97ea;
    border-radius: 10px;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    opacity: ${({ loading }) => (loading ? 0.7 : 1)};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
    :hover {
      opacity: 0.8;
    }
  }
  a {
    display: block;
    text-align: center;
    margin-top: 30px;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
    :hover {
      opacity: 0.8;
    }
  }
`;
