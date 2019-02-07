import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
  MDBCol,
  MDBRow,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle
} from "mdbreact";
import SignUpForm from "../../components/SignUpForm.jsx";
import { signup } from "../../actions/SignUpAction";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      username: "",
      name: "",
      isOpen: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password, name, username } = this.state;
    const { signup } = this.props;
    event.preventDefault();
    const signupData = {
      email: email,
      password: password,
      name: name,
      username: username
    };
    signup(signupData);
  };
  componentWillReceiveProps(nextProps) {
    const { Error } = nextProps.returnData;
    if (Error) {
      this.setState({ errors: nextProps.returnData.Error });
      toast.error(nextProps.returnData.Error);
    } else {
      const { access_token } = nextProps.returnData;
      window.localStorage.setItem("token", access_token);
      toast.success("You have successfully signed up.");
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <MDBNavbar color="red" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Fast Food Fast</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left />
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">Login</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBRow className="container-fluid w-100 m-0 h-100 flex-center">
          <MDBCol sm="12" md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Fast Food Fast</MDBCardTitle>
                <MDBCardText className="font-italic">
                  <h4>
                    "Fast Food Fast is the leading online restaurant in Uganda.
                  </h4>
                  <h4>
                    We offer the most delicious meals at affordable prices.
                  </h4>
                  <h4>
                    Order anything from a rolex to chicken and pilau, we got you
                    covered."
                  </h4>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" sm="12" className="p-5">
            <SignUpForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              errors={this.state.errors}
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

SignUp.propTypes = {
  returnData: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  signUp: PropTypes.func
};

SignUp.defaultProps = {
  returnData: {},
  signUp: () => {}
};

export const mapStateToProps = state => {
  return {
    returnData: state.signup.signup
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(SignUp);
