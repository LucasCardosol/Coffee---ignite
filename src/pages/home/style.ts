import styled from 'styled-components'

export const HomeContainer = styled.main`
    
`
export const IntroStyle = styled.section`
    background-size: cover;
    padding-top: calc(5.875rem + 6.5rem);
    padding-bottom: 6.75rem;
    .container {
        display: flex;
        justify-content: space-between;
        gap: 3.5rem;
    }
    .container > div{
        max-width: calc(50% - 1.75rem);
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr; /* Duas colunas com tamanhos iguais */
        grid-column-gap: 2.5rem; /* Espaço de 40px entre as colunas */
        grid-row-gap: 1.25rem;
        max-width: 35.4rem;
    }
    li{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    h1{
        color:${(props) => props.theme['base-title']}
    }
    .text-l{
        color:${(props) => props.theme['base-subtitle']};
        margin: 1rem 0 4.125rem 0;
        
    }
    .coffe{
        background-color: ${(props) => props.theme['purple']};
    }
    .cart{
        background-color: ${(props) => props.theme['yellow-dark']};
    }
    .box{
        background-color: ${(props) => props.theme['base-text']};
    }
    .clock{
        background-color: ${(props) => props.theme['yellow']};
    }

`
export const CoffeList = styled.section`
    header{
        padding: 34px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ul {
            display: flex;
            gap: 8px;
        }
    }
    .container > ul{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 32px;
        grid-row-gap: 40px;
    }
`
