import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const matchedUserIds = matches.map(({ userId }) => userId);

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      {matchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.dogName + "profile"} />
          </div>
          <h3>{match?.dogName}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
