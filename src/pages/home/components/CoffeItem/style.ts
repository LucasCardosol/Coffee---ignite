import styled from 'styled-components'


export const CoffeItemStyle = styled.li`
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 16rem;
        padding: 20px;
        img{
            max-width: 7.5rem;
        }
        .tagsType {
            display: flex;
            gap: 0.25rem;
            margin: 0.75rem 0 1rem 0;
            span{
                background-color: ${(props) => props.theme['yellow-light']};
                padding: 4px 8px;
                border-radius: 32px;
                p{
                    color: ${(props) => props.theme['yellow-dark']} 
                }
            }
        }
        .text-s , h4{
            text-align: center;
        }
        h4{
            color: ${(props) => props.theme['base-subtitle']};
        }
        .text-s{
            color: ${(props) => props.theme['base-label']};
            margin: 0.5rem 0 2rem 0;
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            span{
                display: flex;
                font-family: 'Roboto', sans-serif;
                align-items: center;
                color: ${(props) => props.theme['base-text']};
                h4{
                    display:inline;
                    margin-left: 4px;
                }
            }
            > div{
                display: flex;
                gap: 8px;
                .cart{
                    background-color: ${(props) => props.theme['purple-dark']};
                    height: 2.375rem;
                    width: 2.375rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.2s;
                    &:hover{
                        background-color: ${(props) => props.theme['purple']};
                    }
                }
            }
        }
    }
`