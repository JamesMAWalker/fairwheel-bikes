import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import ItemPage from "../shop-item/shop-item.component";
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ItemPageWithSpinner = WithSpinner(ItemPage);


class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
    
  };

  render() {
    console.log('aaa',this.props);
    console.log('bbb', this.state);
    
    const { match, collection } = this.props;
    
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              {...props}
              isLoading={loading}
              collection={collection}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              {...props}
              isLoading={loading}
              collection={collection}
            />
          )}
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
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
});

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);