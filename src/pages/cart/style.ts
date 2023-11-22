import styled from 'styled-components'

export const CartContainer = styled.main`
    padding-top: 6.5rem;
    form {
        display: flex;
        gap: 2rem;
    }
    h5{
        margin-bottom: 1rem;
    }
    .frame {
        padding: 2.5rem;
        background: ${(props) => props.theme['base-card']};
        border-radius: 6px;
        margin-bottom: 0.75rem;
    }
    .container{
        padding-top: 2.5rem;
    }
    .error-message{
            float: right;
            position: absolute;
            top: -30px;
            left: 30px;
            background-color: ${(props) => props.theme['background']};
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            color: #dc3545;
            white-space: nowrap;
            z-index: 1;
        }
`
export const Info = styled.section`
    flex: 1;
    .title{
        display: flex;
        gap: 0.5rem;
        p{
            color: ${(props) => props.theme['base-text']};
            span{
                color: ${(props) => props.theme['base-subtitle']};
                font-weight: 500;
            }
        }
    }
    .inputs{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        .divInput{
            position: relative;
            flex:1
        }
        
        .rowInput{
            display: flex;
            gap: 0.75rem;
            width: 100%;
        }
        .divInput:first-child{
            width: 12.5rem;
            max-width: 12.5rem;   
        }
        
        input , select{
            width: 100%;
            font-size: 0.875rem;
            font-family: 'Roboto', sans-serif;
            line-height: 130%;
            padding: 12px;
            border-radius: 4px;
            border: 1px solid ${(props) => props.theme['base-button']};
            background-color:${(props) => props.theme['base-input']} ;
            color: ${(props) => props.theme['base-text']};
            
            &:focus{
                outline: 1px solid ${(props) => props.theme['yellow-dark']};
            }
            ::placeholder{
                color:${(props) => props.theme['base-label']} ;
            }
        }
        select{
            cursor: pointer;
        }
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 2rem;
        gap: 0.75rem;
    }
    label{
       gap: 0.75rem;
       color: ${(props) => props.theme['base-text']};
       background-color:${(props) => props.theme['base-button']} ;
       padding: 1rem;
       flex: 1;
       white-space: nowrap;
       justify-content: left;
       transition: 0.2s;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        &:hover{
            background-color: ${(props) => props.theme['base-hover']};
        }
        input{
            display: none;
        }
    }
    .selected{
        outline: 1px solid ${(props) => props.theme['purple']} ;
        background-color: #EBE5F9;
        &:hover{
            background-color: #EBE5F9;
        }
    }
`
export const Confirmation = styled.section`
    width: 40%;
    .frame{
        border-bottom-left-radius: 44px;
        border-top-right-radius: 44px;
        
    }
    
    footer{
        ul{
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        li{
            display: flex;
            justify-content: space-between;
        }
        .text-s{
            color: ${(props) => props.theme['base-text']};
        }
        .text-l{
            color: ${(props) => props.theme['base-subtitle']};
            font-weight: bold;
        }
        button{
            color: ${(props) => props.theme['white']};
            background-color: ${(props) => props.theme['yellow']};
            width: 100%;
            padding: 0.5rem 0;
            border-radius: 6px;
            margin-top: 1.5rem;
        }
    }
    .button-g{
        transition: 0.2s;
        &:hover{
            background-color: ${(props) => props.theme['yellow-dark']};
        }
        &:disabled{
            cursor: auto;
        }
        &:disabled:hover{
            background-color: ${(props) => props.theme['yellow']};
        }
    }
    .carrinhoVazinho{
        padding-bottom: 30px;
        color: #dc3545;
    }
`