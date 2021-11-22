import styled from "styled-components";

export default function PlanForm({ subscription, toggleInput }) {
  return (
    <>
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
    </>
  );
}

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
