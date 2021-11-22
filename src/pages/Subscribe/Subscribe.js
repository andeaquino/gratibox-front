import styled from "styled-components";
import planImg from "../../assets/plano.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { set, useForm } from "react-hook-form";
import PlanForm from "./components/PlanForm";

export default function Subscribe() {
  const { userInfo } = useContext(UserContext);
  const [subscription, setSubscription] = useState({
    planType: null,
    planDate: null,
    products: [],
    name: "",
    address: "",
    cep: "",
    city: "",
    state: "",
  });
  const [inputAddress, setInputAddress] = useState(false);

  const toggleInput = (type, value) => {
    if (type === "plano") {
      setSubscription({ ...subscription, planType: value, planDate: null });
    }
    if (type === "entrega") {
      setSubscription({ ...subscription, planDate: value });
    }
    if (type === "produto") {
      if (subscription.products.includes(value)) {
        const newProducts = subscription.products;
        const index = newProducts.indexOf(value);
        newProducts.splice(index, 1);
        setSubscription({ ...subscription, products: newProducts });
      } else {
        setSubscription({
          ...subscription,
          products: [...subscription.products, value],
        });
      }
    }
  };

  const submit = () => {
    setInputAddress(true);
  };

  return (
    <PlansContainer>
      <h1>Bom te ver por aqui, {userInfo.name}.</h1>
      <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      <PlanBox>
        <img src={planImg} alt="Meditação plano" />
        {inputAddress ? (
          ""
        ) : (
          <PlanForm subscription={subscription} toggleInput={toggleInput} />
        )}
      </PlanBox>
      <NextButton
        allChecked={
          !!subscription.planDate &&
          !!subscription.planType &&
          subscription.products.length > 0
        }
        onClick={submit}
      >
        Próximo
      </NextButton>
    </PlansContainer>
  );
}

const PlansContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 40px;
    padding-top: 60px;
    text-align: center;
    font-weight: 500;
  }

  h2 {
    text-align: center;
    padding: 0 0 30px;
    font-weight: 300;
    color: #ffffff;
  }
`;

const PlanBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px 20px;

  img {
    width: 100%;
    border-radius: 25px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #4d65a8;
    padding-top: 8px;
  }

  form {
    width: 100%;
    padding: 0 15px;
    border-radius: 5px;
    background-color: rgba(224, 209, 237, 0.62);
    margin-bottom: 8px;

    input {
      min-width: 20px;
      min-height: 20px;
    }

    h4 {
      font-size: 17px;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: #4d65a8;
      padding: 8px 0;
      text-align: center;
    }
  }
`;

const NextButton = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  width: 202px;
  height: 39px;
  background-color: #8c97ea;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 8px;
  opacity: ${({ allChecked }) => (allChecked ? 1 : 0.7)};
  pointer-events: ${({ allChecked }) => (allChecked ? "all" : "none")};
`;
