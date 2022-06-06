import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./MatchesDisplay.css";
import { TailSpin } from "react-loader-spinner";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const matchedUserIds = matches.map(({ userId }) => userId);
  const [loading, setLoading] = useState(false);

  const userId = cookies.UserId;

  const getMatches = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/users`,
        {
          params: { userIds: JSON.stringify(matchedUserIds) },
        }
      );
      setMatchedProfiles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMatches();
    console.log();
  }, []);

  return (
    <div className="flex-col content-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="content-center">
            <TailSpin color="#7f67c5" height={80} width={80} />
          </div>
        </div>
      ) : (
        matchedProfiles?.map((match, _index) => (
          <div key={_index} className="">
            <div className="flex content-between container">
              <div className="img-container">
                <img
                  src={match?.url}
                  alt={match?.dogName + "profile"}
                  onClick={() => setClickedUser(match)}
                />
              </div>
              <h3 onClick={() => setClickedUser(match)}>{match?.dogName}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MatchesDisplay;
