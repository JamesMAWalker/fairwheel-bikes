import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCollectionItem, selectCollection } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import './shop-item.styles.scss';


const ItemPage = ({ item, collection }) => {

    
    return (
      <div>
        <Link className="prev-page" to={`/shop/${collection.routeName}`}>
          {collection.title}
        </Link>
        <div className="item">
          <img src={item.imageUrl} alt="" />
          <div className="item-detail">
            <h1 className="item-title">{item.name}</h1>
            <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                illo laboriosam expedita itaque distinctio quam in aut fuga
                repellendus laudantium dolorum blanditiis consectetur, assumenda
                perspiciatis ea doloribus quas adipisci dolores!
            </p>
            <CustomButton>ADD TO CART</CustomButton>
            </div>
        </div>
      </div>
      // <div className="shop-item">
      //   <div className="photo"></div>
      //   <div className="title">{title}</div>
      //   <div className="title">{description}</div>
      //   <div className="title">{weight}</div>
      // </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  item: selectCollectionItem(
    ownProps.match.params.id,
    ownProps.match.params.collectionId
  )(state)
});

export default connect(mapStateToProps)(ItemPage);