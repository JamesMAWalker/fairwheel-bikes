import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, collection }) => {
    const { name, price, imageUrl, id } = item;
    // console.log(collection);
    
    
    return (
      <div className="collection-item">
        <Link
          to={`/shop/${collection.routeName}/${id}`}
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} invereted>
          ADD TO CART
        </CustomButton>
      </div>
    );
};



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)), 
});

// const mapStateToProps = state => ({
//   collection: selectCollection
// });


export default connect(null, mapDispatchToProps)(CollectionItem);