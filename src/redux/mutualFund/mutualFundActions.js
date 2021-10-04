import mutualFundConstants from './mutualFundConstants';


export const fetchMutualFundsListStartAction = () => ({
    type: mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_START,
});

export const fetchMutualFundsListSuccessAction = mutualFundsListMap => ({
    type: mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_SUCCESS,
    payload: mutualFundsListMap
});


export const fetchMutualFundsFailureAction = errorMessage => ({
    type: mutualFundConstants.FETCH_MUTUAL_FUNDS_FAILURE,
    payload: errorMessage
});

export const fetchMutualFundsDetailsStartAction = (schemeCode) => ({
    type: mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_START,
    payload: schemeCode
});

export const fetchMutualFundsDetailsSuccessAction = mutualFundsDetailsMap => ({
    type: mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_SUCCESS,
    payload: mutualFundsDetailsMap
});

