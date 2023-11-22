import { defaultTheme } from "../../../../styles/themes/default"
import Quantity from "../../../../components/Quantity"
import { ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { CoffeItemStyle } from "./style"
import { CartContext } from "../../../../contexts/CartContext"
import { formatPrice } from "../../../../utils/format/price"

interface coffeType {
    coffe:{
        image: string;
        name: string;
        type: string[];
        description: string;
    }
}

export interface coffeItemType {
    name: string;
    image: string;
    quantity: number;
    total: number;
}

function CoffeItem({coffe}:coffeType) {

    const [coffeQuantity, setCoffeQuantity] = useState(1)
    const result = coffeQuantity * 9.90
    const { addToCart } = useContext(CartContext)

    function increase(){
        if(coffeQuantity < 9){
            setCoffeQuantity(coffeQuantity + 1)
        }
    }

    function decrease(){
        if(coffeQuantity > 1){
            setCoffeQuantity(coffeQuantity - 1)
        }
    }

    

    return (
        <CoffeItemStyle>
            <div className="card">
                <img src={coffe.image}></img> 
                <div className="tagsType">
                    {
                        coffe.type.map((type:any) =>
                            <span key={type}>
                                <p className="tag">{type}</p>
                            </span>
                        )
                    }
                </div>
                <h4>{coffe.name}</h4>
                <p className="text-s">O tradicional café feito com água quente e grãos moídos</p>
                <div className="buttons">
                    <span className="text-xs">R$ <h4>{formatPrice(result)}</h4></span>
                    <div>
                        <Quantity number={coffeQuantity} increase={increase} decrease={decrease}/>
                        <button className="cart" onClick={() => addToCart({
                                name:coffe.name,
                                image: coffe.image,
                                quantity: coffeQuantity,
                                total: result,
                            
                        })}>
                            <ShoppingCart size={21} weight="fill" color={defaultTheme.background}/>
                        </button>
                    </div>
                </div>
            </div>
        </CoffeItemStyle>
    )
}

export default CoffeItem