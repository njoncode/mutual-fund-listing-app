import { createSelector } from 'reselect';

const selectMutualFund = state => state.mutualFund;

export const selectMutualFundList = createSelector(
    [selectMutualFund],
    state => state.mutualFundList
);

export const selectMutualFundDetails = createSelector(
    [selectMutualFund],
    state => state.mutualFundDetails
);

export const selectIsMutualFundDetailsFetching = createSelector(
    [selectMutualFund],
    shop =>  shop.isFetching
);





    
    