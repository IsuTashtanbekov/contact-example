const SET_USERS = "SET_USERS"
const SORT_CONTACTS_NAME = "SORT_CONTACTS_NAME"
const SORT_BY_REVERSE = "SORT_BY_REVERSE"
const CHANGE_NAME = 'CHANGE_NAME'

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
        case SORT_CONTACTS_NAME : {
            return {
                ...state, users: state.users.sort((a, b) => a.name.localeCompare(b.name))
            }
        }
        case SORT_CONTACTS_NAME : {

        }
        case CHANGE_NAME : {
            const {id, newName} = action.payload;
            return state.users.map( user => {
                if (user.id === id) {
                    return {...user, name: newName}
                }
                return user;
            } )
        }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type:SET_USERS, users})
export const sortByName = () => ({type: SORT_CONTACTS_NAME})

export const changeName = (id, newName) => ({type:CHANGE_NAME, payload:{id: id, newName:newName }})