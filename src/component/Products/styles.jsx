import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const ProductsWrapper = styled(Row)`
  width: 100%;
  justify-content: center;
`;

export const ProductsContainer = styled(Row)`
  width: 90%;
  max-width: 1440px;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
  .productsContainerTitle {
    width: 100%;
    font-size: 1.5rem;
    color: #242b36;
    margin-bottom: 42px;
  }
`;

export const SubCategoryListWrapper = styled(Col)`
  width: 25%;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const SubCategoryList = styled(Col)`
  height: auto;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 14px;
  padding: 14px 30px;
  .subCategoryListTitle {
    font-weight: 500;
    padding: 16px 0;
  }
`;

export const SubcategoryItem = styled(Row)`
  font-weight: 500;
  padding: 16px 0;
  border-top: 1px solid #242b36;
  cursor: pointer;
  color: ${(props) =>
    props.categoryState === props.id ? props.theme.primary : "#696e79"};
`;

export const ProductsItemWrapper = styled(Row)`
  width: 75%;
  max-width: 1200px;
  justify-content: flex-end;
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ProductsItemContainer = styled(Row)`
  width: 95%;
  max-width: 1200px;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: space-between;
  }
  @media only screen and (max-width: 711px) {
    justify-content: center;
  }
`;

export const ProductItem = styled(Col)`
  width: 280px;
  margin: 0 12px 42px;
`;

export const ItemImageContainer = styled(Col)`
  width: 100%;
  height: 300px;
  border: 1px solid #e8e8e8;
  align-items: center;
  .itemImage {
    width: 174px;
    height: 174px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
  }
`;

export const ItemDescription = styled(Row)`
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  .cost {
    font-size: 1.5rem;
  }
`;

export const ProductDesc = styled(Col)`
  .productName {
  }
  .vendor {
    font-size: 0.875rem;
    color: #c1c4c8;
  }
`;

export const ItemActions = styled(Row)`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  .moreInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    border: 1px solid;
    border-color: ${(props) => props.theme.primary};
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const AddToCartButton = styled.button`
  width: 220px;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-size: 0.9375rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  :active{
    border: 2px solid white;
  }
  @media only screen and (max-width: 480px) {
    width: 190px;
  }
`;
