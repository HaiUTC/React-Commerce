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
