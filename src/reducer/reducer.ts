import { ActionTypes } from "./actions";
import { coffeItemType } from "../pages/home/components/CoffeItem";

export interface CartContextType {
  listCoffes:coffeItemType[];
  total:number;
  order:any
}

export function cartReducer(state:CartContextType , action: any){

    var stateCopy = state.listCoffes

    switch(action.type){

      case ActionTypes.ADD_TO_CART:
        const coffe = action.payload.data
        
        if(stateCopy.some(item => item.name === coffe.name)){
          stateCopy = stateCopy.filter(item => item.name !== coffe.name);
          stateCopy = stateCopy.concat(coffe)
        }else{
          stateCopy = stateCopy.concat(coffe)
        }
        
        var totalPrice = stateCopy.reduce((total, item) => total + item.total, 0)

        return {
          ...state,
          listCoffes: stateCopy,
          total: totalPrice
        };


      case ActionTypes.CHANGE_QUANTITY:
        var { name , quantity } = action.payload.data;
        const coffeeIndex = stateCopy.findIndex(cafe => cafe.name === name);

        if (coffeeIndex !== -1) {
          stateCopy[coffeeIndex].quantity = quantity;
          stateCopy[coffeeIndex].total = 9.9 * quantity;
        }

        var totalPrice = stateCopy.reduce((total, item) => total + item.total, 0);
        
        return {
          ...state,
          listCoffes: stateCopy,
          total: totalPrice
        };
      

      case ActionTypes.REMOVE_OF_CART:
        var { name } = action.payload.data;
        stateCopy = stateCopy.filter(item => item.name !== name);
        
        var totalPrice = stateCopy.reduce((total, item) => total + item.total, 0);

        return {
          ...state,
          listCoffes: stateCopy,
          total: totalPrice
        };

      case ActionTypes.SEND_ORDER:
      var { order } = action.payload.data;
      
      console.log("order: ",
        {
          ...state,
          order: order
        }
      )

      return {
        ...state,
        order: order
      };
      
      default:
        return state 
    }

  } 