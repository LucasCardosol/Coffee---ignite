import { coffeItemType } from "../pages/home/components/CoffeItem"

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_OF_CART = 'REMOVE_OF_CART',
    CHANGE_QUANTITY = 'CHANGE_QUANTITY',
    SEND_ORDER = 'SEND_ORDER'
}

export function addCoffeAction({name,image, quantity, total}:coffeItemType) {
    return {
        type:ActionTypes.ADD_TO_CART,
        payload: {
            data: {name,image, quantity, total}
        }
    }
}

export function changeQuantityAction( name:string , quantity:number) {
    return {
        type:ActionTypes.CHANGE_QUANTITY,
        payload: {
            data: {name, quantity}
        }
    }
}

export function removeOfCartAction(name:string ) {
    return {
        type:ActionTypes.REMOVE_OF_CART,
        payload: {
            data: {name}
        }
    }
}

export function sendOrderAction(order:any ) {
    return {
        type:ActionTypes.SEND_ORDER,
        payload: {
            data: {order}
        }
    }
}


