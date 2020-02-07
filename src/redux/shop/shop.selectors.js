import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionItem = (itemUrlParam, collectionUrlParam) =>
    createSelector(
        [selectCollections],
        // collections => collections[collectionUrlParam].items[(itemUrlParam - 1)]
        collections => collections[collectionUrlParam].items.find(item => item.id == itemUrlParam)
    );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
      collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)