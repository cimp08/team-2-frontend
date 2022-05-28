import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateProfile.css";

const CreateProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [formData, setFormData] = useState({
    user: cookies.userId,
    matches: [],
    dogName: "",
    breed: "",
    gender: "he",
    genderInterest: "she",
    age: 5,
    about: "",
    url: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/v1/dogs/", {
        formData,
      });
      const success = response.status === 201;
      if (success) navigate("/swipe");
    } catch (err) {
      console.log(err);
    }
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

  return (
    <>
      <Header />
      <div className="onboarding bg-white w-3/4 rounded-3xl  shadow-2xl py-10 px-2 text-center">
        <h1 className="text-5xl font-normal mt-4 mb-10">
          Create Doggy Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="dogName">Dog Name</label>
            <input
              id="dogName"
              type="text"
              name="dogName"
              placeholder="Your dogs name"
              required={true}
              value={formData.dogName}
              onChange={handleChange}
            />
            <label htmlFor="breed">Breed</label>
            <input
              id="breed"
              type="text"
              name="breed"
              placeholder="Your dogs breed"
              required={true}
              value={formData.breed}
              onChange={handleChange}
            />
            <label>Age</label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Age"
              required={true}
              value={formData.age}
              onChange={handleChange}
            />
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender"
                type="radio"
                name="gender"
                value="he"
                onChange={handleChange}
                checked={formData.gender === "he"}
              />
              <label htmlFor="man-gender">He</label>
              <input
                id="female-gender"
                type="radio"
                name="gender"
                value="she"
                onChange={handleChange}
                checked={formData.gender === "she"}
              />
              <label htmlFor="female-gender">She</label>
            </div>
            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="genderInterest"
                value="he"
                onChange={handleChange}
                checked={formData.genderInterest === "he"}
              />
              <label htmlFor="man-gender-interest">He</label>
              <input
                id="female-gender-interest"
                type="radio"
                name="genderInterest"
                value="she"
                onChange={handleChange}
                checked={formData.genderInterest === "she"}
              />
              <label htmlFor="female-gender-interest">She</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="genderInterest"
                value="everyone"
                onChange={handleChange}
                checked={formData.genderInterest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="textarea"
              name="about"
              required={true}
              placeholder="I like to be petted..."
              value={formData.about}
              onChange={handleChange}
            />
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
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>

          <section>
            <input className="item" type="submit" />
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateProfile;
