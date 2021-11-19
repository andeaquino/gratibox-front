import styled from "styled-components";
import weekImg from "../../assets/semanal.jpg";
import monthImg from "../../assets/mensal.jpg";

export default function Plans() {
  return (
    <PlansContainer>
      <h1>Bom te ver por aqui, Ande.</h1>
      <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      <PlanBox>
        <img src={weekImg} alt="Meditação semanal" />
        <p>Você recebe um box por semana.</p>
        <p>Ideal para quem quer exercer a gratidão todos os dias.</p>
        <button>Assinar</button>
      </PlanBox>
      <PlanBox>
        <img src={monthImg} alt="Meditação mensal" />
        <p>Você recebe um box por mês.</p>
        <p>Ideal para quem está começando agora.</p>
        <button>Assinar</button>
      </PlanBox>
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
