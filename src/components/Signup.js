import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { register } from "../services/userServices";
import Form from "./common/Form";

class Signup extends Form {
  state = { data: { name: "", email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      await register(this.state.data);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div elevation={3}>
            <div>Signup</div>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderSubmitBtn("Signup")}
          </div>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
