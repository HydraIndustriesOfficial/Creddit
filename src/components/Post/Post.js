import React, { useState } from "react";
import "./Post.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";

const Post = () => {
  const [number, setNumber] = useState(0);
  const [upVoteClicked, setUpVoteClicked] = useState(false);
  const [downVoteClicked, setDownVoteClicked] = useState(false);
  const handleUpVoteClicked = () => {
    if (upVoteClicked) {
      return;
    }
    setUpVoteClicked(!upVoteClicked);
    setNumber(number + 1);
    if (downVoteClicked) {
      setDownVoteClicked(!downVoteClicked);
    }
  };

  const handleDownVoteClicked = () => {
    if (downVoteClicked) {
      return;
    }
    setNumber(number - 1);
    setDownVoteClicked(!downVoteClicked);
    if (upVoteClicked === true) {
      setUpVoteClicked(!upVoteClicked);
    }
  };
  return (
    <div className="post_wrapper">
      <div className="post_container">
        <div className="post_arrows_container">
          <AiOutlineArrowUp
            className="upVote"
            color={upVoteClicked ? "green" : "white"}
            onClick={handleUpVoteClicked}
          />
          <div className="upVotes">
            <span>{number}</span>
          </div>
          <AiOutlineArrowDown
            className="downVote"
            color={downVoteClicked ? "red" : "white"}
            onClick={handleDownVoteClicked}
          />
        </div>
        <div className="post_content_container">
          <div className="post_information">
            <h3>Post Information</h3>
          </div>
          <hr />
          <div className="user_information">
            <h6>UserName</h6>
            <h6>20 hrs ago</h6>
            <h6>
              <BsChatLeft />
              &nbsp;
              8
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
