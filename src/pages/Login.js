import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex">
        <div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10">
          <h1 className="text-5xl font-normal mt-4 mb-10">Log in</h1>

          <Form onSubmit={handleLogin} ref={form}>
            <div>
              <input
                type="email"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className="w-full bg-purple-500 shadow-xl hover:bg-purple-700 text-white py-2 px-9 rounded-full"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div>
                <p>{message}</p>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>

          <div className="w-full border-t border-gray-400 mt-5">
            <div className="flex justify-center">
              <h2 className="text-md font-normal mt-4">
                Don't have an account?
              </h2>
              <h2 className="text-md font-bold ml-2 mt-4">
                <Link to="/signup">Sign up</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
