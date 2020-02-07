import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import ItemPage from "../shop-item/shop-item.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";


class ShopPage extends React.Component {
  
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  };

  render() {
    console.log('aaa',this.props);
    console.log('bbb', this.state);
    
    const {
      match,
    } = this.props;
    
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          // collection={collection}
        />
        <Route
          exact
          path={`${match.path}/:collectionId/:id`}
          component={ItemPage}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


// const mapStateToProps = createStructuredSelector({
//   isCollectionsLoaded: selectIsCollectionsLoaded,
// });


export default connect(null, mapDispatchToProps)(ShopPage);