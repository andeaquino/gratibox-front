import styled from "styled-components";

export default function AddressForm({ subscription, setSubscription }) {
  return (
    <StyledPlanForm>
      <input
        type="text"
        placeholder="Nome completo"
        onChange={(e) =>
          setSubscription({ ...subscription, name: e.target.value })
        }
        value={subscription.name}
      />
      <input
        type="text"
        placeholder="Endeeço de entrega"
        onChange={(e) =>
          setSubscription({ ...subscription, address: e.target.value })
        }
        value={subscription.address}
      />
      <input
        type="text"
        placeholder="CEP"
        onChange={(e) =>
          setSubscription({ ...subscription, cep: e.target.value })
        }
        value={subscription.cep}
      />
      <div>
        <input
          type="text"
          placeholder="Cidade"
          onChange={(e) =>
            setSubscription({ ...subscription, city: e.target.value })
          }
          value={subscription.city}
        />
        <input
          type="text"
          placeholder="Estado"
          onChange={(e) =>
            setSubscription({ ...subscription, state: e.target.value })
          }
          value={subscription.state}
        />
      </div>
    </StyledPlanForm>
  );
}

const StyledPlanForm = styled.form``;
