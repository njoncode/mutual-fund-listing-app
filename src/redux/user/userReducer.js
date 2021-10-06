import userConstants from "./userConstants";

const INTITAL_STATE = {
    usersData: [],
    currentUser: null,
    error: null
};

const userReducer = (state = INTITAL_STATE, action) => {
    switch(action.type) {
        case userConstants.SIGN_UP_SUCCESS:
            return { 
                ...state,
                currentUser: action.payload,
                usersData: [...state.usersData, action.payload],
                error: null
            };
        case userConstants.SIGN_UP_FAILURE:
            return { 
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;