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
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-9 rounded-full">
            Sign up
          </button>
        </Link>
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

      <div className="doggymatch-dog"></div>

      <Footer />
    </div>
  );
};

export default Home;
