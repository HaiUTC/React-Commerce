import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../component/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";
import {CollectionItems, CollectionPage, CollectionTitle} from './Collection-Styled'
const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPage>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
