import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 6.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: ${(props) => props.theme['background']};
    z-index: 1;
    nav , .kart{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        gap: 0.75rem;
    }
    .kart a, .kart div{
        height: 2.375rem;
        padding: 0 8px;
        display: flex;
        align-items: center;
        border-radius: 8px;
    }
    .kart div{
        background-color: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple']}; 
    }
    .kart a {
        background-color: ${(props) => props.theme['yellow-light']};
        transition: 0.3s;
        text-decoration: none ;
        position: relative;
        span{
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            height: 20px;
            width: 20px;
            background-color: ${(props) => props.theme['yellow-dark']};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            color: white;
            p{
                margin-bottom: -1px;
            }
        }
        &:hover{
            background-color: ${(props) => props.theme['yellow']};
            color: white !important;
            svg {
                fill: white;
            }
        }
    }
    
`