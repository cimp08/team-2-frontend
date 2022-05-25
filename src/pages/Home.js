import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home text-center">
        <h1 className="home-text">Swipe Right</h1>
        <Link to="/signup">
          <button className="sign-button">Sign up</button>
        </Link>
      </div>
      <div className="flex justify-end">
        <div className="doggymatch-dog"></div>
      </div>

      <section className="home-testimonials">
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Sofie Eriksson</h3>
          <p className="testimonials-text">
            “Jag hittade den perfekta partnern till Fluffy via Doggymatch! I
            sommar kommer våra valpar”
          </p>
        </div>
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Magdalena Grip</h3>
          <p className="testimonials-text">
            “Jag hittade den perfekta partnern till Fluffy via Doggymatch! I
            sommar kommer våra valpar”
          </p>
        </div>
        <div className="testimonials-card">
          <h3 className="testimonials-heading">Simon Andersson</h3>
          <p className="testimonials-text">
            “Jag hittade den perfekta partnern till Fluffy via Doggymatch! I
            sommar kommer våra valpar”
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
