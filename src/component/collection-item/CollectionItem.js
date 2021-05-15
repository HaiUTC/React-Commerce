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
