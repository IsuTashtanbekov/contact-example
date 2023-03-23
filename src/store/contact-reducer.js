const SET_USERS = "SET_USERS"
const SORT_CONTACTS_NAME = "SORT_CONTACTS_NAME"
const SORT_BY_REVERSE = "SORT_BY_REVERSE"
const CHANGE_NAME = 'CHANGE_NAME'
const SEARCH_CONTACTS = "SEARCH_CONTACTS"
const CHANGE_USERNAME = "CHANGE_USERNAME"

const initialState = {
    users: [],
    filteredUsers: []
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
        case CHANGE_NAME: {
            const { id, newName } = action.payload;
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === id ? { ...user, name: newName } : user
                )
            };
        }
        case CHANGE_USERNAME : {
            const {id, newUsername} = action.payload
            return {
                ...state,
                users: state.users.map(user =>
                user.id === id? {...user, username: newUsername} : user )
            }
        }
        case SEARCH_CONTACTS: {
            const searchQuery = action.payload.toLowerCase();
            return {
                ...state,
                filteredUsers: state.users.filter((user) =>
                    user.name.toLowerCase().includes(searchQuery)
                )
            };
        }
        case SORT_BY_REVERSE: {
            return {
                ...state, users: state.users.reverse()
            }
        }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type:SET_USERS, users})
export const sortByName = () => ({type: SORT_CONTACTS_NAME})
export const searchContacts = (query) => ({
    type: SEARCH_CONTACTS,
    payload: query
});

export const reverseSort = () => ({type:SORT_BY_REVERSE})

export const changeName = (id, newName) => ({type:CHANGE_NAME, payload:{id: id, newName:newName }})
export const changeUsername = (id, newUsername) => {
    return {
        type: CHANGE_NAME,
        payload: {
            id: id,
            newUsername: newUsername
        }
    }
}