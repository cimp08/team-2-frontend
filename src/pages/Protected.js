import { useEffect } from "react";
import axios from "axios";

const Protected = () => {
  const runVerifyToken = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/protected`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  /* function getProtected() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/protected`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      withcredentials: "true",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } */

  useEffect(() => {
    runVerifyToken();
  }, []);
};

export default Protected;
