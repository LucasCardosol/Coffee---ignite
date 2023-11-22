import { ButtonFilterStyle } from "./style";
import { useState } from "react";

interface ButtonFilterType{
    text:string;
    handleFilterListCoffes: (text:any) => void;
  }
  
const ButtonFilter = ({text, handleFilterListCoffes}:ButtonFilterType) =>{
    
    const [active, setActive] = useState(false)

    function handleSetFilter(){
        setActive(!active)
        handleFilterListCoffes(text)
    }

    return(
        <ButtonFilterStyle active={active} >
            <button onClick={handleSetFilter}>
                <p className="tag">{text}</p>
            </button>
        </ButtonFilterStyle>
    )
}

export default ButtonFilter