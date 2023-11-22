import styled from 'styled-components'

interface ButtonFilterProps {
    active?: boolean;
}

export const ButtonFilterStyle = styled.li<ButtonFilterProps>`
    button{
        padding: 6px 12px;
        border: 1px solid ${(props) => props.theme['yellow-dark']};
        color:${(props) => !props.active ? props.theme['yellow-dark'] : props.theme['background']} ;
        border-radius: 32px;
        background-color: ${(props) => props.active ? props.theme['yellow-dark'] : 'transparent'};
        transition: 0.2s;
        &:hover{
            background: ${(props) => !props.active ?  props.theme['yellow-light']: props.theme['yellow-dark']};
            color:${(props) =>  !props.active ? props.theme['yellow-dark']: props.theme['background']};
        }
        &:active{
            color:${(props) =>  props.theme['yellow-dark']};
        }
    }
`