import styled from "styled-components";
import planImg from "../../assets/plano.jpg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import PlanForm from "./components/PlanForm";
import AddressForm from "./components/AddressForm";
import { postPlan } from "../../services/API";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";

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
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  const goToAddress = () => {
    setInputAddress(true);
  };

  const submitSubscription = () => {
    setLoading(true);
    postPlan({ body: subscription, token: userInfo.token })
      .then((res) => {
        setLoading(false);
        history.push("/planos");
      })
      .catch((err) => {
        setLoading(false);
        alert("Erro ao assinar o plano");
      });
  };

  return (
    <PlansContainer>
      <h1>Bom te ver por aqui, {userInfo.name}.</h1>
      <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      <PlanBox>
        <img src={planImg} alt="Meditação plano" />
        {inputAddress ? (
          <AddressForm
            subscription={subscription}
            setSubscription={setSubscription}
            submitSubscription={submitSubscription}
          />
        ) : (
          <PlanForm subscription={subscription} toggleInput={toggleInput} />
        )}
      </PlanBox>
      {inputAddress ? (
        <NextButton
          allChecked={
            !!subscription.name &&
            !!subscription.address &&
            !!subscription.cep &&
            !!subscription.city &&
            !!subscription.state
          }
          onClick={submitSubscription}
          loading={loading}
        >
          {loading ? (
            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
          ) : (
            "Finalizar"
          )}
        </NextButton>
      ) : (
        <NextButton
          allChecked={
            !!subscription.planDate &&
            !!subscription.planType &&
            subscription.products.length > 0
          }
          onClick={goToAddress}
        >
          Próximo
        </NextButton>
      )}
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
  opacity: ${({ allChecked, loading }) => (allChecked && !loading ? 1 : 0.7)};
  pointer-events: ${({ allChecked, loading }) =>
    allChecked && !loading ? "all" : "none"};
`;
