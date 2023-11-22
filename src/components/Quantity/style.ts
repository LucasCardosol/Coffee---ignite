import styled from "styled-components";

export const QuantityStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme['base-button']};
    height: 2.375rem;
    width: 4.5rem;
    border-radius: 6px;
    transition: 0.2s;
    button:hover{
        svg{
            transform: scale(1.2);
        }
    }
`