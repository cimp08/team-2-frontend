import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h3>
          <strong>Name:</strong> {currentUser.user.user}
        </h3>
        <p>
          <strong>Id:</strong> {currentUser.user.userId}
        </p>
        <p>
          <strong>Authorities:</strong> {currentUser.user.role}
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
