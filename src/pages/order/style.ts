import styled from 'styled-components'

export const OrderContainer = styled.main`
    padding-top: 6.5rem;
    .container {
        padding-top: 5rem;
        >div{
            display: flex;
            justify-content: space-between;
            gap: 6.375rem;
        }
    }
    h2{
        color:${(props) => props.theme['yellow-dark']} ;
    }
    .text-l{
        color:${(props) => props.theme['base-subtitle']} ;
    }
    .text-m{
        color:${(props) => props.theme['base-text']} ;
    }
    ul{
        padding: 2.5rem;
        border: 1px solid ${(props) => props.theme['purple']};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2.5rem;
        border-radius: 6px;
        border-bottom-left-radius: 36px;
        border-top-right-radius: 36px;
    }
    li{
        display: flex;
    }
    
`