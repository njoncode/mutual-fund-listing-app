import userConstants from "./userConstants";

const INTITAL_STATE = {
    usersData: [],
    currentUser: null,
    error: null,
    isLoading: true,
};

const userReducer = (state = INTITAL_STATE, action) => {
    switch(action.type) {
        case userConstants.SIGN_UP_SUCCESS:
            return { 
                ...state,
                currentUser: action.payload,
                usersData: [...state.usersData, action.payload],
                error: null,
                isLoading: false,
            };
        case userConstants.SIGN_UP_FAILURE:
        case userConstants.SIGN_IN_FAILURE:
        case userConstants.SIGN_OUT_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isLoading: false
            };
        case userConstants.SIGN_IN_SUCCESS:
        return { 
            ...state,
            currentUser: action.payload,
            error: null,
            isLoading: false,
        };
        case userConstants.SIGN_OUT_SUCCESS:
            return { 
                ...state,
                currentUser: null,
                error: null,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default userReducer;