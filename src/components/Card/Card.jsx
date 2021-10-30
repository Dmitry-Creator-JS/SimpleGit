import React, { useEffect, useState } from "react";
import MyButton from "../../sharedUI/myButton/MyButton";
import { useParams } from "react-router-dom";
import { getCurrentRepo } from "../redux/actions";
import "./../../App.css";

const Card = (props) => {
  const { userName, repoName } = useParams();
  const [repo, setRepo] = useState({ owner: {} });

  useEffect(() => {
    getCurrentRepo(userName, repoName, setRepo);
  }, []);

  return (
    <div>
      <MyButton onClick={() => props.history.goBack()} className="back_btn">
        {" "}
        BACK{" "}
      </MyButton>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="pic" />
        <div className="name">{repo.name} </div>
        <div className="stars">{repo.stargazers_count} </div>
      </div>
    </div>
  );
};

export default Card;
