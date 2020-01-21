import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import ItemPage from "../shop-item/shop-item.component";

import { selectCollection } from '../../redux/shop/shop.selectors';

const ShopPage = ({ match, collection }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      render={(collection) => <CollectionsOverview collection={collection}/>}
    />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
      collection={collection}
    />
    <Route
      exact
      path={`${match.path}/:collectionId/:id`}
      component={ItemPage}
    />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(ShopPage);