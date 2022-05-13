import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to="/signup">
        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-9 rounded-full">
          Sign up
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
