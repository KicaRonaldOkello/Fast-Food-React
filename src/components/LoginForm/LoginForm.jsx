import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./LoginForm.css";

const LoginForm = ({ onChange, onSubmit, errors }) => {
  return (
    <MDBContainer fluid className="">
      <MDBRow className="flex flex-center m-0">
        <MDBCol className="m-0 p-0">
          <form onSubmit={onSubmit}>
            <MDBCard>
              <div className="header pt-3 bg">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="font-weight-bold white-text mt-3 mb-4 pb-1 mx-5">
                    Login
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4 grey-text">
                <p className=" red-text is-valid">{errors}</p>
                <MDBInput
                  name="email"
                  label="Type your email"
                  group
                  icon="envelope"
                  containerClass="mb-0"
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={onChange}
                  id="email"
                />

                <MDBInput
                  name="password"
                  label="Type your password"
                  group
                  icon="lock"
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={onChange}
                />

                <MDBBtn type="submit" className="btn-block" color="red">
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
LoginForm.propTypes = {
  errors: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
