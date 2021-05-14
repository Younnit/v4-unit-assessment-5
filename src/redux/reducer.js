const initialState = {
    username: '',
    img: ''
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function updateUser(user){
    return{
        type: UPDATE_USER,
        payload: user
    }
}

export function logout(){
    return{
        type: LOGOUT_USER,
        payload: null
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            return {...state, username: action.payload.username, img: action.payload.img}
        case LOGOUT_USER:
            return {...state, username: action.payload, img: action.payload}
        default:
            return {...state}
    }
}