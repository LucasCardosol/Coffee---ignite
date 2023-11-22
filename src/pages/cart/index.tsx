import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContainer, Info, Confirmation } from "./style";
import { defaultTheme } from "../../styles/themes/default";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import { formatPrice } from "../../utils/format/price";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

function getRandomTime() {
  const minMinutes = 10;
  const maxMinutes = 90;
  const randomTime =
    Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
  return `${randomTime}min - ${randomTime + 10}min`;
}

const estadosBrasil = [
  { uf: "AC", nome: "Acre" },
  { uf: "AL", nome: "Alagoas" },
  { uf: "AP", nome: "Amapá" },
  { uf: "AM", nome: "Amazonas" },
  { uf: "BA", nome: "Bahia" },
  { uf: "CE", nome: "Ceará" },
  { uf: "DF", nome: "Distrito Federal" },
  { uf: "ES", nome: "Espírito Santo" },
  { uf: "GO", nome: "Goiás" },
  { uf: "MA", nome: "Maranhão" },
  { uf: "MT", nome: "Mato Grosso" },
  { uf: "MS", nome: "Mato Grosso do Sul" },
  { uf: "MG", nome: "Minas Gerais" },
  { uf: "PA", nome: "Pará" },
  { uf: "PB", nome: "Paraíba" },
  { uf: "PR", nome: "Paraná" },
  { uf: "PE", nome: "Pernambuco" },
  { uf: "PI", nome: "Piauí" },
  { uf: "RJ", nome: "Rio de Janeiro" },
  { uf: "RN", nome: "Rio Grande do Norte" },
  { uf: "RS", nome: "Rio Grande do Sul" },
  { uf: "RO", nome: "Rondônia" },
  { uf: "RR", nome: "Roraima" },
  { uf: "SC", nome: "Santa Catarina" },
  { uf: "SP", nome: "São Paulo" },
  { uf: "SE", nome: "Sergipe" },
  { uf: "TO", nome: "Tocantins" },
];

function Cart() {
  const navigate = useNavigate();
  const { listCoffes, total, sendOrder } = useContext(CartContext);
  const delivery = total === 0 ? 0 : 5 + listCoffes.length * 2;
  const cartIsEmpty = listCoffes.length > 0;
  const orderFormValidationSchema = zod.object({
    cep: zod
      .string()
      .length(8, { message: "CEP deve ter exatamente 8 dígitos" })
      .regex(/^\d+$/, { message: "CEP deve conter apenas números" })
      .refine((value) => value !== "00000000", { message: "CEP inválido" })
      .refine((value) => !!value, { message: "CEP é obrigatório" }),
    rua: zod
      .string()
      .max(50, { message: "Rua deve ter no máximo 50 caracteres" })
      .refine((value) => !!value, { message: "Rua é obrigatória" }),
    numero: zod
      .string()
      .max(10, { message: "Número deve ter no máximo 10 caracteres" })
      .refine((value) => !!value, { message: "Número é obrigatório" }),
    complemento: zod
      .string()
      .max(50, { message: "Complemento deve ter no máximo 50 caracteres" }),
    bairro: zod
      .string()
      .max(50, { message: "Bairro deve ter no máximo 50 caracteres" })
      .refine((value) => !!value, { message: "Bairro é obrigatório" }),
    cidade: zod
      .string()
      .max(50, { message: "Cidade deve ter no máximo 50 caracteres" })
      .refine((value) => !!value, { message: "Cidade é obrigatória" }),
    uf: zod
      .string()
      .refine((value) => !!value, { message: "UF é obrigatória" }),
    payment: zod
      .string()
      .refine((value) => !!value, { message: "Escolha a forma de pagamento" }),
  });

  type OrderFormData = zod.infer<typeof orderFormValidationSchema>;

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      payment: "", // Defina um valor padrão como uma string vazia
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = orderForm;

  function handleSubmitOrder(data: OrderFormData) {
    if (cartIsEmpty) {
      const dataToSend = {
        form: data,
        timeDelivery: getRandomTime(),
      };
      sendOrder(dataToSend);
      navigate("/order");
    }
  }

  return (
    <CartContainer>
      <div className="container">
        <form onSubmit={handleSubmit(handleSubmitOrder)}>
          <FormProvider {...orderForm}>
            <Info>
              <h5>Complete seu pedido</h5>
              <div className="frame">
                <div className="title">
                  <MapPinLine color={defaultTheme["yellow-dark"]} size={22} />
                  <p className="text-s">
                    <span className="text-m">Endereço de Entrega</span>
                    <br />
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
                <div className="inputs">
                  <div className="divInput">
                    <input
                      placeholder="CEP"
                      id="cep"
                      {...register("cep")}
                      type="number"
                      required
                    ></input>
                    {errors?.cep && (
                      <p className="error-message">{errors.cep.message}</p>
                    )}
                  </div>
                  <div className="divInput">
                    <input
                      placeholder="Rua"
                      id="rua"
                      {...register("rua")}
                      required
                    ></input>
                    {errors?.rua && (
                      <p className="error-message">{errors.rua.message}</p>
                    )}
                  </div>
                  <div className="rowInput">
                    <div className="divInput">
                      <input
                        placeholder="Número"
                        id="numero"
                        {...register("numero")}
                        required
                        type="number"
                      ></input>
                      {errors?.numero && (
                        <p className="error-message">{errors.numero.message}</p>
                      )}
                    </div>
                    <div className="divInput">
                      <input
                        placeholder="Complemento"
                        id="complemento"
                        {...register("complemento")}
                      ></input>
                      {errors?.complemento && (
                        <p className="error-message">
                          {errors.complemento.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="rowInput">
                    <div className="divInput">
                      <input
                        placeholder="Bairro"
                        id="bairro"
                        {...register("bairro")}
                        required
                      ></input>
                      {errors?.bairro && (
                        <p className="error-message">{errors.bairro.message}</p>
                      )}
                    </div>
                    <div className="divInput">
                      <input
                        placeholder="Cidade"
                        id="cidade"
                        {...register("cidade")}
                        required
                      ></input>
                      {errors?.cidade && (
                        <p className="error-message">{errors.cidade.message}</p>
                      )}
                    </div>
                    <div className="divInput">
                      <select
                        id="uf"
                        className="uf"
                        {...register("uf")}
                        required
                      >
                        <option value="">UF</option>
                        {estadosBrasil.map((estado) => (
                          <option key={estado.uf} value={estado.uf}>
                            {estado.nome}
                          </option>
                        ))}
                      </select>
                      {errors?.uf && (
                        <p className="error-message">{errors.uf.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame">
                <div className="title">
                  <CurrencyDollar color={defaultTheme["purple"]} size={22} />
                  <p className="text-s">
                    <span className="text-m">Pagamento</span>
                    <br />O pagamento é feito na entrega. Escolha a forma que
                    desejar
                  </p>
                </div>
                <div className="buttons">
                  <label
                    className={`text-s ${
                      orderForm.watch("payment") === "credito" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value="credito"
                      checked={orderForm.watch("payment") === "credito"}
                      {...register("payment")}
                      onChange={() => orderForm.setValue("payment", "credito")}
                    />
                    <CreditCard color={defaultTheme["purple"]} size={16} />
                    CARTÃO DE CRÉDITO
                  </label>
                  <label
                    className={`text-s ${
                      orderForm.watch("payment") === "debito" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value="debito"
                      checked={orderForm.watch("payment") === "debito"}
                      {...register("payment")}
                      onChange={() => orderForm.setValue("payment", "debito")}
                    />
                    <Bank color={defaultTheme["purple"]} size={16} />
                    CARTÃO DE DÉBITO
                  </label>
                  <label
                    className={`text-s ${
                      orderForm.watch("payment") === "dinheiro"
                        ? "selected"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value="dinheiro"
                      checked={orderForm.watch("payment") === "dinheiro"}
                      {...register("payment")}
                      onChange={() => orderForm.setValue("payment", "dinheiro")}
                    />
                    {errors?.payment && (
                      <p className="error-message">{errors.payment.message}</p>
                    )}
                    <Money color={defaultTheme["purple"]} size={16} />
                    DINHEIRO
                  </label>
                </div>
              </div>
            </Info>
            <Confirmation>
              <h5>Cafés selecionados</h5>
              <div className="frame">
                <ul>
                  {cartIsEmpty ? (
                    listCoffes.map((coffee) => (
                      <CartItem
                        image={coffee.image}
                        name={coffee.name}
                        total={coffee.total}
                        quantity={coffee.quantity}
                      />
                    ))
                  ) : (
                    <li className="carrinhoVazinho">Seu carrinho está vazio</li>
                  )}
                </ul>
                <footer>
                  <ul>
                    <li>
                      <p className="text-s">Total de itens</p>
                      <p className="text-s">R$ {formatPrice(total)}</p>
                    </li>
                    <li>
                      <p className="text-s">Entrega</p>
                      <p className="text-s">R$ {formatPrice(delivery)}</p>
                    </li>
                    <li>
                      <p className="text-l">Total</p>
                      <p className="text-l">
                        R$ {formatPrice(total + delivery)}
                      </p>
                    </li>
                  </ul>
                  <button
                    className="button-g"
                    type="submit"
                    disabled={!cartIsEmpty}
                  >
                    CONFIRMAR PEDIDO
                  </button>
                </footer>
              </div>
            </Confirmation>
          </FormProvider>
        </form>
      </div>
    </CartContainer>
  );
}

export default Cart;
