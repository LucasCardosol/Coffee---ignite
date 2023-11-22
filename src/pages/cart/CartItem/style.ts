import styled from "styled-components"

export const CartItemStyle = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    img{
        width:4rem ;
    }
    >div{
        display: flex;
        gap: 1.25rem;
    }
    .coffeInfo{
        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        button{
            gap: 4px;
            background-color: ${(props) => props.theme['base-button']};
            color: ${(props) => props.theme['base-text']};
            border-radius: 6px;
            padding: 0.5rem;
            height: 2.375rem;
        }
        .button-m{
            transition: 0.2s;
            &:hover{
                background-color: ${(props) => props.theme['base-hover']};
            }
            
        } 
    }
    span{
        font-weight: bold;
        color: ${(props) => props.theme['base-text']};
    }
`