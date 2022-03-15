import { typesProduct } from "../types/types"


const initialState = {
    products: []
}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.create:
            return {
                products: [action.payload]
            }
        case typesProduct.edit:
            return {
                ...state
            }
        case typesProduct.delete:
            return {
                products: state.products.filter(p => p.name !== action.payload)
            }
        case typesProduct.list:
            return {
                products: [...action.payload]
            }
        case typesProduct.search:
            return {
                products:  action.payload
            }
        default:
            return state;
    }
}