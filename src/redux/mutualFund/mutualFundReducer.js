import mutualFundConstants from './mutualFundConstants';

const INITIAL_STATE = {
    mutualFundList: null,
    mutualFundDetails: null,
    isFetching: false,
    errorMessage: undefined
}

const mutualFundReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_START: 
            return {
                ...state,
                isFetching: true
            };
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            mutualFundList: action.payload
        };
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_FAILURE: 
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_FAILURE: 
        return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
        };
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_START: 
            return {
                ...state,
                isFetching: true,
            };
        case mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            mutualFundDetails: action.payload
        };
        default:
            return state;
    }
}

export default mutualFundReducer;