import { Create } from "@mui/icons-material";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./CreateProfile.css";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "female",
    email: "",
    url: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value: " + value, "name" + name);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Header />
      <div className="onboarding-container">
        <div className="onboarding bg-white max-w-4xl rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10 text-center">
          <h1 className="text-5xl font-normal mt-4 mb-10">
            Create Doggy Profile
          </h1>
          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                value={formData.first_name}
                onChange={handleChange}
              />
              <label>Birthday</label>
              <div className="multiple-input-container">
                <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  value={formData.dob_day}
                  onChange={handleChange}
                />
                <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                />
                <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={formData.dob_year}
                  onChange={handleChange}
                />
              </div>
              <label>Gender</label>
              <div className="multiple-input-container">
                <input
                  id="man-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_identity === "man"}
                />
                <label htmlFor="man-gender-identity">Male</label>
                <input
                  id="female-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_identity === "female"}
                />
                <label htmlFor="female-gender-identity">Female</label>
                <input
                  id="more-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={formData.gender_identity === "more"}
                />
                <label htmlFor="more-gender-identity">Other</label>
              </div>
              <label htmlFor="show-gender">Show gender on my profile</label>
              <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />

              <label>Show Me</label>
              <div className="multiple-input-container">
                <input
                  id="man-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_interest === "man"}
                />
                <label htmlFor="man-gender-interest">Male</label>
                <input
                  id="female-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_interest === "female"}
                />
                <label htmlFor="female-gender-interest">Female</label>
                <input
                  id="everyone-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === "everyone"}
                />
                <label htmlFor="everyone-gender-interest">Everyone</label>
              </div>

              <label htmlFor="about">About me</label>
              <input
                id="about"
                type="textbox"
                name="about"
                required={true}
                placeholder="I like to be petted..."
                value={formData.about}
                onChange={handleChange}
              />
              <input type="submit" value="Send" />
            </section>

            <section>
              <label htmlFor="url">Profile Picture</label>
              <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                placeholder="Url of your photo"
                required={true}
              />
              <div className="photo-container">
                <img src={formData.url} alt="profile pic preview" />
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProfile;
