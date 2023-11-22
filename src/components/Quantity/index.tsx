import { defaultTheme } from "../../styles/themes/default"
import { Plus, Minus} from "phosphor-react"
import { QuantityStyle } from "./style"
import { useState } from "react";

interface QuantityType {
  number: number;
  increase: () => void;
  decrease: () => void;
} 

function Quantity({number, increase, decrease}: QuantityType) {

  const [minusHover , setMinusHover] = useState(false)
  const [plusHover , setPlusHover] = useState(false)

  return (
    <QuantityStyle>
        <button type="button" onClick={decrease} onMouseOver={() => setMinusHover(true)} onMouseLeave={() => setMinusHover(false)}>
            <Minus weight="bold" size={14} color={minusHover ? defaultTheme["purple-dark"] :defaultTheme.purple} />
        </button>
        <p className="text-m">{number}</p>
        <button type="button" onClick={increase} onMouseOver={() => setPlusHover(true)} onMouseLeave={() => setPlusHover(false)}>
            <Plus weight="bold" size={14} color={plusHover ? defaultTheme["purple-dark"] : defaultTheme.purple}/>
        </button>
    </QuantityStyle>
  )
}

export default Quantity