import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Products from "../Products";
import Footer from "../Footer";
import {
  ViewWrapper,
  VendorDetailWrapper,
  VendorDetailContainer,
  VendorImage,
  VendorDetail,
  SearchBoxWrapper,
  SearchBoxContainer,
  Form,
  InputWrapper,
  SelectWrapper,
  Button,
} from "./styles";

import VendorStoreImage from "../../Assets/Images/VendorStoreImage.png";

AOS.init();

const View = (props) => {
  return (
    <ViewWrapper>
      <Header />
      <VendorDetailWrapper>
        <div className="routeText">Vendors / Vendor</div>
        <div className="title">Vendor Detail Page</div>
        <VendorDetailContainer>
          <VendorImage
            data-aos="fade-up"
            data-aos-duration="1000"
            src={VendorStoreImage}
          ></VendorImage>
          <VendorDetail>
            <div className="storeName">Store Name</div>
            <div className="location">Location</div>
            <div className="type">Type/Service</div>
            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </div>
          </VendorDetail>
        </VendorDetailContainer>
        <SearchBoxWrapper>
          <SearchBoxContainer>
            <Formik
              initialValues={{ name: "", type: "" }}
              onSubmit={(values, actions) => {
                console.log(values, actions);
                actions.setSubmitting(false);
                actions.resetForm();
              }}
            >
              <Form autoComplete="OFF" onSubmit={props.handleSubmit}>
                <InputWrapper>
                  <label>Search</label>
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    // value={props.values.address}
                    name="address"
                    placeholder="Enter City, Street, ... "
                  />
                </InputWrapper>
                <SelectWrapper>
                  <label>Type of Service</label>
                  <select
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    // value={props.values.type}
                    name="type"
                  >
                    <option value="0">Service Type</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </SelectWrapper>
                <Button disabled>Search</Button>
              </Form>
            </Formik>
          </SearchBoxContainer>
        </SearchBoxWrapper>
        <Products />
      </VendorDetailWrapper>
      <Footer />
    </ViewWrapper>
  );
};

View.propTypes = {};

export default View;
