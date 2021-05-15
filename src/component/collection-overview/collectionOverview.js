<<<<<<< HEAD
import React from "react";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/collection-preview/CollectionPreview";
import {selectCollectionForPreview} from "../../redux/shop/shopSelector";
import {CollectionOverviewContainer} from './CollectionOverview-Styled'
const collectionOverview = ({collections}) => {
  return (
    <CollectionOverviewContainer>
      {(collections).map(({id,...otherProps}) =>(
        <CollectionPreview key={id} {...otherProps} />
      )) }
    </CollectionOverviewContainer>
  );
};
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})


export default connect(mapStateToProps)(collectionOverview);
=======
import React from "react";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/collection-preview/CollectionPreview";
import selectShopCollections from "../../redux/shop/shopSelector";
import "./collectionOverview.scss";
const collectionOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...item }) => (
        <CollectionPreview key={id} {...item} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})


export default connect(mapStateToProps)(collectionOverview);
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
