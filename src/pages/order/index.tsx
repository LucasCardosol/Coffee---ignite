import { OrderContainer } from "./style";
import motoCycle from "../../assets/images/structure/motocycle.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

function Order() {
  const { order } = useContext(CartContext);

  return (
    <OrderContainer>
      <div className="container">
        <h2>Uhu! Pedido confirmado</h2>
        <p className="text-l">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div>
          <ul>
            <li>
              <span className="circle"></span>
              <p className="text-m">
                Etrega em{" "}
                <strong>{`${order.form.rua}, ${order.form.numero}`}</strong>
                <br />
                {order.form.cidade}, {order.form.uf}
              </p>
            </li>
            <li>
              <span className="circle"></span>
              <p className="text-m">
                Previsão de entrega
                <br />
                <strong>{order.timeDelivery}</strong>
              </p>
            </li>
            <li>
              <span className="circle"></span>
              <p className="text-m">
                Pagamento na entrega <br />
                <strong>{order.form.payment}</strong>
              </p>
            </li>
          </ul>
          <div>
            <img src={motoCycle} alt="motocycle"></img>
          </div>
        </div>
      </div>
    </OrderContainer>
  );
}

export default Order;
