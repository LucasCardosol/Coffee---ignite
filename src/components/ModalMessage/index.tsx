import { CartContext } from "../../contexts/CartContext"
import { ModalMessageSytle } from "./style"
import { useContext } from "react"
import { CheckCircle } from "phosphor-react"
import { defaultTheme } from "../../styles/themes/default"


function ModalMessage() {
    const {message , showModalMessage } = useContext(CartContext)

    return (
        <ModalMessageSytle showModalMessage={showModalMessage}  >
            <div className={showModalMessage ? 'show' : 'disapear'}>
                <p className={defaultTheme['base-text']}>{message}</p>
                <CheckCircle color="#198754" size={24} weight="fill"/>
            </div>
        </ModalMessageSytle>
    )
}

export default ModalMessage