const SET_USERS = "SET_USERS"

const initialState = {
    users: []
}
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS : {
            return {
                ...state, users: action.users
            }
        }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type:SET_USERS, users})