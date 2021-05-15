<<<<<<< HEAD
import memoize from "lodash.memoize";
import { createSelector } from "reselect";
const selectCollections = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectCollections],
  shop => shop.collections
);
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = memoize((collectionsUrlParams) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections ? collections[collectionsUrlParams] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectCollections],
  shop => shop.isFetching
)

export const selectCollectionLoading = createSelector(
  [selectCollections],
  shop=> !!shop.collections
)

=======
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
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
