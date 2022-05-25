import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }
      console.log(name, email, password);

      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { name, email, password }
      );

      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;
      if (success) navigate("/createprofile");
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
          <h1 className="text-5xl font-normal mt-4 mb-10">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="name"
                required={true}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
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
            <div>
              <input
                type="password"
                id="password-check"
                className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="password-check"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required={true}
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <input
                className="w-full bg-purple-500 shadow-xl hover:bg-purple-700 text-white py-2 px-9 rounded-full"
                type="submit"
              />
            </div>
            <p>{error}</p>
          </form>

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
      </section>
      <Footer />
    </>
  );
};

export default Signup;
