import React, { useState, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setCookie("AuthToken", response.data.user);
      setCookie("UserId", response.data.user.userId);

      const success = response.status === 200;
      if (success) navigate("/swipe");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section className="grow my-8">
        <div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10">
          <h1 className="text-5xl font-normal mt-4 mb-10">Log in</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                placeholder="Email Adress"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required={true}
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <input
                className="w-full bg-purple-500 shadow-xl hover:bg-purple-700 text-white py-2 px-9 rounded-full"
                type="submit"
              />
            </div>
          </form>

          <div className="w-full border-t border-gray-400 mt-5">
            <div className="flex justify-center">
              <h2 className="text-md font-normal mt-4">
                Dont have an account?
              </h2>
              <h2 className="text-md font-bold ml-2 mt-4">
                <Link to="/signup">Sign up</Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
