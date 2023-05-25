import React, { useState } from "react";
import "./Post.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Post = () => {
  const [upVoteClicked, setUpVoteClicked] = useState(false);
  const [downVoteClicked, setDownVoteClicked] = useState(false);
  const handleUpVoteClicked = () => {
    setUpVoteClicked(!upVoteClicked);
    if (downVoteClicked === true) {
      setDownVoteClicked(!downVoteClicked);
    }
  };

  const handleDownVoteClicked = () => {
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
          <div className="upVotes">0</div>
          <AiOutlineArrowDown
            className="downVote"
            color={downVoteClicked ? "red" : "white"}
            onClick={handleDownVoteClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
