<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import { CollectionFooterContainer, CollectionItemContainer, CustomButtonStyled, Image, InfoName, InfoPrice } from './CollectionItem-Styled';
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} ></Image>
      <CollectionFooterContainer>
        <InfoName>{name}</InfoName>
        <InfoPrice>{price}$</InfoPrice>
      </CollectionFooterContainer>
      <CustomButtonStyled inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButtonStyled>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
=======
import React from "react";
import { connect } from "react-redux";
import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cartAction";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
