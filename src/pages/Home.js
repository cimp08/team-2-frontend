import React from "react";
import "./Home.css";
import { useCookies } from "react-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authUser = cookies.userId;

  return (
    <>
      <Header />
      <div className="home text-center">
        <h1 className="home-text">Swipe Right</h1>
        {authUser ? (
          <Link to="/swipe">
            <button className="sign-button">Find your match!</button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="sign-button">Sign up</button>
          </Link>
        )}
      </div>
      <div className="flex justify-end">
        <div className="doggymatch-dog"></div>
      </div>

      <section className="home-testimonials">
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Sofie Eriksson</h3>
          <p className="testimonials-text">
            “I found the perfect partner for Fluffy via Doggymatch! This summer
            we get our puppies!”
          </p>
        </div>
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Magdalena Grip</h3>
          <p className="testimonials-text">
            “I was literally online five mins and kicked off but before I caught
            sight of a dog and we clicked right away”
          </p>
        </div>
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Simon Andersson</h3>
          <p className="testimonials-text">
            “I have been using doggymatch for quite some time and I really enjoy
            it! Cool app”
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
