import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const selectCollections = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectCollections],
  (shop) => shop.collections
);
export const selectCollection = memoize((collectionsUrlParams) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionsUrlParams]
  )
);
export default selectShopCollections;
