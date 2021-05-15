<<<<<<< HEAD
import React, { useEffect } from "react";
import { ShopPage } from "./Shop-Styled";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../component/collection-overview/collectionOverview";
import CollectionContainer from "../collection/CollectionContainer";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

const Shop = ({fetchCollectionStart, match}) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <ShopPage>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </ShopPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
=======
import React from "react"
import {Route} from 'react-router-dom'
import CollectionOverview from "../../component/collection-overview/collectionOverview";
import Collection from "../collection/Collection";

import "./shop.scss";
const Shop = ({match}) => {
  return (
    <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
  );
};


export default (Shop);
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
