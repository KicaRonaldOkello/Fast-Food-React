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
import PropTypes from "prop-types";
import "./SignUpForm.css";

const SignUpForm = ({ onChange, onSubmit, errors }) => {
  return (
    <div>
      <MDBContainer fluid className="">
        <MDBRow className="flex flex-center m-0">
          <MDBCol className="m-0 p-0">
            <form onSubmit={onSubmit}>
              <MDBCard>
                <div className="header pt-3 bg">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="font-weight-bold white-text mt-3 mb-4 pb-1 mx-5">
                      Sign Up
                    </h3>
                  </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4 grey-text">
                  <p className=" red-text is-valid">{errors}</p>
                  <MDBInput
                    name="username"
                    validate
                    label="Type your username"
                    group
                    icon="user"
                    containerClass="mb-0"
                    type="text"
                    error="wrong"
                    success="right"
                    onChange={onChange}
                    id="username"
                  />
                  <MDBInput
                    name="name"
                    label="Type your name"
                    group
                    icon="user"
                    containerClass="mb-0"
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onChange}
                    id="name"
                  />
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

                  <div className="text-center">
                    <MDBBtn type="submit" className="btn-block" color="red">
                      Login
                    </MDBBtn>
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                      <a href="/passwordreset" className="red-text ml-1">
                        Forgot Password?
                      </a>
                    </p>

                    <div className="row my-3 d-flex justify-content-center" />
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
SignUpForm.propTypes = {
  errors: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
