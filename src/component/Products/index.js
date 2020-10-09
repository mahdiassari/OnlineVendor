import React, { useState } from "react";
import {
  ProductsWrapper,
  ProductsContainer,
  SubCategoryListWrapper,
  SubCategoryList,
  SubcategoryItem,
} from "./styles";

import { CategoryMenuConfig } from "./CategoryMenuConfig";

import SubCategory1 from "./SubCategory1";
import SubCategory2 from "./SubCategory2";
import SubCategory3 from "./SubCategory3";

const Products = (props) => {
  const [categoryState, setCategoryState] = useState(2);
  
  const category = () => {
    switch (categoryState) {
      case 1:
        return <SubCategory1 />;
      case 2:
        return <SubCategory2 />;
      case 3:
        return <SubCategory3 />;

      default:
        return <SubCategory1 />;
    }
  };
  return (
    <ProductsWrapper>
      <ProductsContainer>
        <div className="productsContainerTitle">Results</div>
        <SubCategoryListWrapper>
          <SubCategoryList>
            <div className="subCategoryListTitle">Subcategories</div>
            {CategoryMenuConfig.map((item) => {
              return (
                <SubcategoryItem
                  className="subCategoryList"
                  onClick={() => setCategoryState(item.id)}
                  categoryState={categoryState}
                  id={item.id}
                >
                  {item.text}
                </SubcategoryItem>
              );
            })}
          </SubCategoryList>
        </SubCategoryListWrapper>
        {category(categoryState)}
      </ProductsContainer>
    </ProductsWrapper>
  );
};

export default Products;
