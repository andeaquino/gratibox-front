import styled from "styled-components";
import dayjs from "dayjs";
import weekImg from "../../assets/semanal.jpg";
import monthImg from "../../assets/mensal.jpg";
import planImg from "../../assets/plano.jpg";
import Logout from "../../shared/Logout";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { calculateDeliveryDates } from "../../services/calculateDeliveryDates";
import { useState } from "react";
import { listPlan } from "../../services/API";

export default function Plans() {
  const { userInfo } = useContext(UserContext);
  const [plan, setPlan] = useState(null);
  const [deliveryDates, setDeliveryDates] = useState(null);

  const loadPlan = () => {
    listPlan({ token: userInfo.token })
      .then((res) => {
        setPlan(res.data);
        setDeliveryDates(
          calculateDeliveryDates(res.data.planType, res.data.planDate)
        );
      })
      .catch((err) => {
        if (err.response?.status === 500) {
          alert("Não foi possível carregar o plano");
        }
      });
  };

  useEffect(loadPlan, []);

  return (
    <PlansContainer>
      <Logout />
      <h1>Bom te ver por aqui, {userInfo.name}.</h1>
      {plan ? (
        <>
          <h2>"Agradecer é a arte de atrair coisas boas"</h2>
          <PlanBox>
            <img src={planImg} alt="Meditação plano" />
            <p>
              Plano: <span>{plan.planType}</span>
            </p>
            <p>
              Data da assinatura:{" "}
              <span>{dayjs(plan.date).format("DD/MM/YY")}</span>
            </p>
            <p>Próximas entregas:</p>
            {deliveryDates?.map((date) => (
              <span>{date}</span>
            ))}
            <ul>
              {plan.product?.map((product) => (
                <li>{product}</li>
              ))}
            </ul>
          </PlanBox>
        </>
      ) : (
        <>
          <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
          <SubsBox>
            <img src={weekImg} alt="Meditação semanal" />
            <p>Você recebe um box por semana.</p>
            <p>Ideal para quem quer exercer a gratidão todos os dias.</p>
            <Link to="/assinar">
              <button>Assinar</button>
            </Link>
          </SubsBox>
          <SubsBox>
            <img src={monthImg} alt="Meditação mensal" />
            <p>Você recebe um box por mês.</p>
            <p>Ideal para quem está começando agora.</p>
            <Link to="/assinar">
              <button>Assinar</button>
            </Link>
          </SubsBox>{" "}
        </>
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

const SubsBox = styled.div`
  width: 100%;
  background-color: #e5cdb3;
  border-radius: 25px;
  margin-bottom: 20px;
  padding: 0 20px 20px;

  img {
    width: 100%;
    border-radius: 25px;
  }

  p {
    color: #4d65a8;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 8px;
  }

  button {
    display: block;
    width: 168px;
    height: 39px;
    background-color: #8c97ea;
    border-radius: 10px;
    margin: 30px auto 0;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
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

  span {
    display: block;
    color: #e63c80;
    font-weight: 700;
    font-size: 18px;
    margin-left: 36px;
  }

  p {
    color: #4d65a8;
    font-weight: 700;
    font-size: 18px;

    span {
      display: inline;
      margin-left: 0;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    font-size: 18px;
    color: #e63c80;
  }
`;
