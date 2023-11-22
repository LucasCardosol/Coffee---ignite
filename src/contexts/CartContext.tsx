import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useReducer,
} from "react";
import { cartReducer } from "../reducer/reducer";
import {
  addCoffeAction,
  changeQuantityAction,
  removeOfCartAction,
  sendOrderAction,
} from "../reducer/actions";
import { coffeItemType } from "../pages/home/components/CoffeItem";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextPropsType {
  listCoffes: coffeItemType[];
  total: number;
  order: any;
  addToCart: (coffeItem: coffeItemType) => void;
  changeQuantityItensCart: (name: string, quantity: number) => void;
  removeOfCart: (name: string) => void;
  message: string;
  showModalMessage: boolean;
  hideModalMessage: () => void;
  sendOrder: (order: any) => void;
}

export const CartContext = createContext({} as CartContextPropsType);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      listCoffes: [],
      total: 0,
      order: {},
    },
    (initialState) => {
      return initialState;
    }
  );

  const { listCoffes, total, order } = cartState;
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [message, setMessage] = useState("");

  function addToCart(coffeItem: coffeItemType) {
    dispatch(addCoffeAction(coffeItem));
    handleShowMessage(`${coffeItem.quantity} ${coffeItem.name} adicionado`);
  }

  function changeQuantityItensCart(name: string, quantity: number) {
    dispatch(changeQuantityAction(name, quantity));
  }

  function removeOfCart(name: string) {
    dispatch(removeOfCartAction(name));
    handleShowMessage(`${name} removido com sucesso`);
  }

  function sendOrder(order: any) {
    dispatch(sendOrderAction(order));
  }

  function handleShowMessage(message: string) {
    setShowModalMessage(true);
    setMessage(message);
  }

  function hideModalMessage() {
    setShowModalMessage(false);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideModalMessage();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <CartContext.Provider
      value={{
        listCoffes,
        total,
        order,
        addToCart,
        changeQuantityItensCart,
        removeOfCart,
        message,
        showModalMessage,
        hideModalMessage,
        sendOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
