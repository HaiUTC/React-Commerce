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
