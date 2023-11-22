import { coffeItemType } from "../../home/components/CoffeItem"
import { Trash } from "phosphor-react"
import { defaultTheme } from "../../../styles/themes/default"
import { formatPrice } from "../../../utils/format/price"
import { CartItemStyle } from "./style"
import Quantity from "../../../components/Quantity"
import { useContext, useState } from 'react'
import { CartContext } from "../../../contexts/CartContext"


function CartItem({image, name, total, quantity }:coffeItemType) {

    const [coffeQuantity, setCoffeQuantity] = useState(quantity)
    const [totalState, setTotalState] = useState(total)
    const { changeQuantityItensCart , removeOfCart } = useContext(CartContext)

    function increase(){
        if(coffeQuantity < 9){
            setCoffeQuantity(coffeQuantity + 1)
            setTotalState(totalState + 9.90)
            changeQuantityItensCart(name, coffeQuantity + 1)
        }
    }

    function decrease(){
        if(coffeQuantity > 1){
            setCoffeQuantity(coffeQuantity - 1)
            setTotalState(totalState - 9.90)
            changeQuantityItensCart(name, coffeQuantity - 1)
        }
    }

  return (
    <CartItemStyle>
        <div>
            <img src={image}></img>
            <div className='coffeInfo'>
                <p className='text-m'>{name}</p>
                <div>
                    <Quantity number={coffeQuantity} increase={increase} decrease={decrease}/>
                    <button className='button-m' type='button' onClick={() => removeOfCart(name)}>
                        <Trash color={defaultTheme['purple']} size={16} weight='bold'/>
                        REMOVER
                    </button>
                </div>
            </div>
        </div>
        <span className='text-m' >R$ {formatPrice(totalState)}</span>
    </CartItemStyle>
  )
}

export default CartItem