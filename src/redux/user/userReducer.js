import userConstants from "./userConstants";
import { editUsersData, editUserPassword } from './userUtils';

const INTITAL_STATE = {
    isProfileDropdownHidden: false,
    usersData: [],
    currentUser: null,
    error: null,
    isLoading: false,
    isSuccess: false,
    failureMessgae: ''
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
                isSuccess: true
            };
        case userConstants.SIGN_UP_FAILURE:
        case userConstants.SIGN_IN_FAILURE:
        case userConstants.SIGN_OUT_FAILURE:
        case userConstants.EDIT_USER_FAILURE:
        case userConstants.EDIT_USER_PASSWORD_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isLoading: false,
                failureMessage: action.payload
            };
        case userConstants.SIGN_IN_START:
            return { 
                ...state,
                error: null,
                isLoading: true,
            };
        case userConstants.SIGN_IN_SUCCESS:
        return { 
            ...state,
            currentUser: action.payload,
            error: null,
            isLoading: false,
            isSuccess: true
        };
        case userConstants.SIGN_OUT_SUCCESS:
            return { 
                ...state,
                currentUser: null,
                error: null,
                isLoading: false,
                isSuccess: true
            };
        case userConstants.TOGGLE_PROFILE_DROPDOWN_HIDDEN:
            return { 
                ...state,
                isProfileDropdownHidden: !state.isProfileDropdownHidden
            };
        case userConstants.EDIT_USER_SUCCESS:
            return { 
                ...state,
                currentUser: action.payload,
                usersData: editUsersData(action.payload, state.currentUser, state.usersData),
                error: null,
                isLoading: false,
                isSuccess: true
            };

        case userConstants.EDIT_USER_PASSWORD_SUCCESS:
            return { 
                ...state,
                currentUser: {...state.currentUser, password: action.payload},
                usersData: editUserPassword(action.payload, state.currentUser, state.usersData),
                error: null,
                isLoading: false,
                isSuccess: true
            }; 
        case userConstants.CLEAR_SUCCESS_FAILURE:
            return { 
                ...state,
                isSuccess: false,
                failureMessage: ''
            };
            
        default:
            return state;
    }
};

export default userReducer;