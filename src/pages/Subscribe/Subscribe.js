import styled from "styled-components";
import planImg from "../../assets/plano.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

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
    console.log(subscription);
  };

  return (
    <PlansContainer>
      <h1>Bom te ver por aqui, {userInfo.name}.</h1>
      <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      <PlanBox>
        <img src={planImg} alt="Meditação plano" />

        <form>
          <h3>Plano</h3>
          <Boxes>
            <div>
              <input
                type="checkbox"
                onClick={() => toggleInput("plano", 1)}
                checked={subscription.planType === 1}
              />
              <span>Semanal</span>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => toggleInput("plano", 2)}
                checked={subscription.planType === 2}
              />
              <span>Mensal</span>
            </div>
          </Boxes>
        </form>

        <form>
          <h3>Entrega</h3>
          {subscription.planType ? (
            subscription.planType === 1 ? (
              <Boxes>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 4)}
                    checked={subscription.planDate === 4}
                  />
                  <span>Segunda</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 5)}
                    checked={subscription.planDate === 5}
                  />
                  <span>Quarta</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 6)}
                    checked={subscription.planDate === 6}
                  />
                  <span>Sexta</span>
                </div>
              </Boxes>
            ) : (
              <Boxes>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 1)}
                    checked={subscription.planDate === 1}
                  />
                  <span>01</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 2)}
                    checked={subscription.planDate === 2}
                  />
                  <span>10</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => toggleInput("entrega", 3)}
                    checked={subscription.planDate === 3}
                  />
                  <span>20</span>
                </div>
              </Boxes>
            )
          ) : (
            <h4>Selecione um plano</h4>
          )}
        </form>

        <form>
          <h3>Quero receber</h3>
          <Boxes>
            <div>
              <input
                type="checkbox"
                onClick={() => toggleInput("produto", 1)}
                checked={subscription.products.includes(1)}
              />
              <span>Chás</span>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => toggleInput("produto", 2)}
                checked={subscription.products.includes(2)}
              />
              <span>Incensos</span>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => toggleInput("produto", 3)}
                checked={subscription.products.includes(3)}
              />
              <span>Produtos organicos</span>
            </div>
          </Boxes>
        </form>
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

const Boxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6px;

  div {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
  }

  span {
    color: #4d65a8;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    margin-left: 4px;
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
