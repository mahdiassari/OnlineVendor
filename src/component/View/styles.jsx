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

export const ViewWrapper = styled(Row)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  transition: 0.5s;
`;

export const VendorDetailWrapper = styled(Row)`
  width: 100%;
  justify-content: center;
  /* height: calc(100% - 120px); */
  margin-top: 120px;
  .title {
    display: flex;
    width: 90%;
    max-width: 1440px;
    font-size: 1.5rem;
    color: #242b36;
    margin-bottom: 32px;
    @media only screen and (max-width: 992px) {
      justify-content: center;
    }
  }
  .routeText {
    display: flex;
    width: 90%;
    max-width: 1440px;
    font-size: 0.75rem;
    color: #696e79;
    margin-top: 32px;
    margin-bottom: 60px;
    @media only screen and (max-width: 992px) {
      /* justify-content: center; */
    }
  }
`;

export const VendorDetailContainer = styled(Row)`
  width: 90%;
  max-width: 1440px;
  align-items: flex-start;
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const VendorImage = styled(Row)`
  min-width: 282px;
  width: 282px;
  height: 272px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin-right: 24px;
  @media only screen and (max-width: 992px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

export const VendorDetail = styled(Col)`
  max-width: 66%;
  text-align: justify;
  @media only screen and (max-width: 992px) {
    align-items: center;
    max-width: 100%;
  }
  .storeName {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  .location {
    font-size: 0.875rem;
    margin-bottom: 16px;
  }
  .type {
    font-size: 0.875rem;
    color: #c1c4c8;
    margin-bottom: 48px;
  }
  .content {
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #727a8b;
    /* max-width: 894px;
    width: auto;
    height: auto; */
  }
`;

export const SearchBoxWrapper = styled(Row)`
  width: 100%;
  min-height: 168px;
  background-color: #f7f7f7;
  margin-top: 64px;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    height: auto;
  }
`;

export const SearchBoxContainer = styled(Row)`
  width: 70%;
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  label {
    font-size: 0.875rem;
    color: #262626;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 992px) {
    /* display:flex; */
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const InputWrapper = styled(Col)`
  width: 35%;
  @media only screen and (max-width: 992px) {
    width: 90%;
    margin-top: 20px;
  }
  input {
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 0 17px;
    ::placeholder {
      color: #bfbfbf;
    }
  }
`;

export const SelectWrapper = styled(Col)`
  width: 35%;
  @media only screen and (max-width: 992px) {
    width: 90%;
    margin-top: 20px;
  }
  select {
    width: 100%;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 0 17px;
    color: #bfbfbf;
  }
`;

export const Button = styled.button`
  width: 15%;
  height: 46px;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  :active {
    border: 2px solid #f7f7f7;
  }
  @media only screen and (max-width: 992px) {
    width: 90%;
    margin: 20px 0;
  }
`;
