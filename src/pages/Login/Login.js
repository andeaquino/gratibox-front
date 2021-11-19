import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signIn } from "../../services/API";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    const { email, password } = data;

    setError(false);
    setLoading(true);

    const body = {
      email,
      password,
    };

    signIn({ body })
      .then((res) => {
        const user = JSON.stringify(res.data);
        localStorage.setItem("user", user);

        setLoading(false);
        history.push("/planos");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <RegisterContainer loading={loading}>
      <h1>
        Bem vindo ao <bold>GratiBox</bold>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Campo não pode estar vazio" })}
        />
        {errors?.email && <p>{errors.email?.message}</p>}

        <input
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: "Campo não pode estar vazio",
            minLength: {
              value: 8,
              message: "Senha deve ter pelo menos 8 caracteres",
            },
          })}
        />
        {errors?.password && <p>{errors.password?.message}</p>}
        {error ? <h2>Email ou senha inválidos</h2> : ""}
        <button type="submit">
          {loading ? (
            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <Link to="/cadastro">Ainda não sou grato</Link>
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

  h2 {
    font-size: 20px;
    color: orangered;
    font-weight: 500;
    text-align: center;
  }

  p {
    margin-top: -8px;
    margin-bottom: 5px;
    padding-left: 5px;
    color: orangered;
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
    margin: 160px auto 0;
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
