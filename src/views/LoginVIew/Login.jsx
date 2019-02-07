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
  MDBCollapse
} from "mdbreact";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { login } from "../../actions/LoginAction";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { Error } = nextProps.returnData;
    if (Error) {
      this.setState({ errors: nextProps.returnData.Error });
      toast.error(nextProps.returnData.Error);
    } else {
      const { access_token } = nextProps.returnData;
      window.localStorage.setItem("token", access_token);
      toast.success("You have successfully logged in.");
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    event.preventDefault();
    const loginData = {
      email: email,
      password: password
    };
    login(loginData);
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { errors } = this.state;
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
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <div className="mt-3 pt-6 w-sm-100 w-md-25 ">
          <MDBRow className="flex flex-center m-0">
            <MDBCol md="6" className="m-0 p-0">
              <LoginForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={errors}
              />
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  returnData: PropTypes.shape({}),
  login: PropTypes.func
};
Login.defaultProps = {
  returnData: {},
  login: () => {}
};

export const mapStateToProps = state => ({
  returnData: state.login.login
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
