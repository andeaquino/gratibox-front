import styled from "styled-components";

export default function AddressForm({
  subscription,
  setSubscription,
  submitSubscription,
}) {
  return (
    <StyledPlanForm onSubmit={submitSubscription}>
      <input
        type="text"
        placeholder="Nome completo"
        onChange={(e) =>
          setSubscription({ ...subscription, name: e.target.value })
        }
        value={subscription.name}
        required
      />
      <input
        type="text"
        placeholder="Endereço de entrega"
        onChange={(e) =>
          setSubscription({ ...subscription, address: e.target.value })
        }
        value={subscription.address}
        required
      />
      <input
        type="text"
        placeholder="CEP"
        onChange={(e) =>
          setSubscription({ ...subscription, cep: e.target.value })
        }
        value={subscription.cep}
        required
      />
      <div>
        <input
          type="text"
          placeholder="Cidade"
          onChange={(e) =>
            setSubscription({ ...subscription, city: e.target.value })
          }
          value={subscription.city}
          required
        />
        <input
          type="text"
          placeholder="Estado"
          onChange={(e) =>
            setSubscription({ ...subscription, state: e.target.value })
          }
          value={subscription.state}
          required
        />
      </div>
    </StyledPlanForm>
  );
}

const StyledPlanForm = styled.form`
  width: 100%;
  background-color: #ffffff;

  div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 8px;
  }

  input {
    width: 100%;
    height: 44px;
    margin-bottom: 8px;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    padding: 0 8px;
    color: #4d65a8;
    font-weight: 700;
    font-size: 18px;
    font-family: "Roboto", sans-serif;

    ::placeholder {
      color: #4d65a8;
    }
  }
`;
