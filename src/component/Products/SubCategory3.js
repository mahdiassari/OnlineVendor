import React from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ProductsItemWrapper,
  ProductsItemContainer,
  ProductItem,
  ItemImageContainer,
  ItemDescription,
  ItemActions,
  ProductDesc,
  AddToCartButton,
} from "./styles";

import EyeIcon from "../Icons/EyeIcon";
import ItemImage1 from "../../Assets/Images/ItemImage1.png";
import ItemImage2 from "../../Assets/Images/ItemImage2.png";
import ItemImage3 from "../../Assets/Images/ItemImage3.png";
AOS.init();

const SubCategory3 = (props) => {
  return (
    <ProductsItemWrapper>
      <ProductsItemContainer>
        <ProductItem data-aos="fade-up" data-aos-duration="1000">
          <ItemImageContainer src={ItemImage2}>
            <div className="itemImage" />
          </ItemImageContainer>
          <ItemDescription>
            <ProductDesc>
              <div className="productName">Product Name</div>
              <div className="vendor">Vendor</div>
            </ProductDesc>
            <div className="cost">$$$</div>
          </ItemDescription>
          <ItemActions>
            <div className="moreInfo">
              <EyeIcon />
            </div>
            <AddToCartButton>Add To Cart</AddToCartButton>
          </ItemActions>
        </ProductItem>

        <ProductItem data-aos="fade-up" data-aos-duration="1000">
          <ItemImageContainer src={ItemImage3}>
            <div className="itemImage" />
          </ItemImageContainer>
          <ItemDescription>
            <ProductDesc>
              <div className="productName">Product Name</div>
              <div className="vendor">Vendor</div>
            </ProductDesc>
            <div className="cost">$$$</div>
          </ItemDescription>
          <ItemActions>
            <div className="moreInfo">
              <EyeIcon />
            </div>
            <AddToCartButton>Add To Cart</AddToCartButton>
          </ItemActions>
        </ProductItem>
      </ProductsItemContainer>
    </ProductsItemWrapper>
  );
};

SubCategory3.propTypes = {};

export default SubCategory3;
