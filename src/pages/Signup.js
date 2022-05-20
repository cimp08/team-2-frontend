import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">This is not a valid email.</div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Signup = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(name, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex">
        <div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10">
          <h1 className="text-5xl font-normal mt-4 mb-10">Sign up</h1>

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <>
                <div>
                  <input
                    type="text"
                    className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    validations={[required, vname]}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    placeholder="Email Adress"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-center items-center mt-6">
                  <button className="w-full bg-purple-500 shadow-xl hover:bg-purple-700 text-white py-2 px-9 rounded-full">
                    Create Account
                  </button>
                </div>
              </>
            )}
            {message && (
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>

          <div className="w-full border-t border-gray-400 mt-5">
            <div className="flex justify-center">
              <h2 className="text-md font-normal mt-4">
                Already have an account?
              </h2>
              <h2 className="text-md font-bold ml-2 mt-4">
                <Link to="/login">Log in</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
