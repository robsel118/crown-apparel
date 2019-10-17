import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = routeParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(item => item.routeName === routeParam)
  );
