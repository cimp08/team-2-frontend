import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { login } from "../services/authServices";
import Form from "../components/common/Form";

class Login extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      const { data } = await login(this.state.data);
      window.localStorage.setItem("token", data);
      window.location = "/";
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.email = error.response.data;
      errors.password = error.response.data;
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit} className="text-center">
          <div elevation={3}>
            <div className="form_heading">Login</div>
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderSubmitBtn("Login")}
          </div>
          <div>
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Login;
