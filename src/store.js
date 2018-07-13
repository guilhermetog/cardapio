import {createStore, applyMiddleware, combineReducers} from 'redux'
import Thunk from 'redux-thunk'

function restauranteReducer(state = {infos:{},cardapio:[]}, action = {}){

    //Pega informações do restaurante
    if(action.type === 'GET_RESTAURANTE'){
       return {
           ...state,
           infos:{...action.data}
       }
    }

    //Pega cardapio do restaurante
    if(action.type === 'GET_CARDAPIO'){
        return {
            ...state,
            cardapio:[...action.data]
        }
     }
    return state
}

function loginReducer(state = {token:""}, action = {}){
    //Retorna token de login
    if(action.type === 'LOGIN'){
       return {
           token:action.data
       }
    }
    return state
}

const store = createStore(
    combineReducers({restaurante: restauranteReducer, login: loginReducer}), 
    applyMiddleware(Thunk)
)

export default store