import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';


// import "./collection-item.styles.scss";
import {
  CollectionItemContainer,
  ItemImage,
  CollectionFooter,
  Name,
  Price
} from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem, collection }) => {
    const { name, price, imageUrl, id } = item;
    
    return (
      <CollectionItemContainer className="collection-item">
        <ItemImage
          to={`/shop/${collection.routeName}/${id}`}
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <CollectionFooter className="collection-footer">
          <Name className="name">{name}</Name>
          <Price className="price">{price}</Price>
        </CollectionFooter>
        <CustomButton onClick={() => addItem(item)} inverted>
          ADD TO CART
        </CustomButton>
      </CollectionItemContainer>
    );
};



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)), 
});


export default connect(null, mapDispatchToProps)(CollectionItem);