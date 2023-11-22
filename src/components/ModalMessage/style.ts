import styled from "styled-components";

interface ModalMessageSytleProps {
    showModalMessage: boolean
}

export const ModalMessageSytle = styled.div<ModalMessageSytleProps>`
    background-color: transparent;
    pointer-events: ${(props) => props.showModalMessage ? 'auto' : 'none'};
    @keyframes fadeInBackground {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    @keyframes fadeOutBackground {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
    .show{
        animation: fadeInBackground 0.3s ease forwards;
    }
    .disapear{
        animation: fadeOutBackground 0.3s ease forwards;
    }

    div{
        height: 60px;
        position: fixed;
        bottom: 60px;
        left: 60px;
        background-color: ${(props) => props.showModalMessage ? props.theme['background'] : 'transparent'};
        display: flex;
        border-radius: 8px;
        justify-content: left;
        align-items: center;
        padding: 0.5rem 1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        gap: 0.5rem;
    }
    
`