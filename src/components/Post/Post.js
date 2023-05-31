import React, { useState, useEffect } from "react";
import "./Post.css";
import "../../theme/typography.module.css";
import "../../theme/theme.dark.css";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";

const Post = () => {
  const [increase, setIncrease] = useState(0);
  const [number, setNumber] = useState(0);
  const [upVoteClicked, setUpVoteClicked] = useState(false);
  const [downVoteClicked, setDownVoteClicked] = useState(false);

  const handleUpVoteClicked = () => {
    if (upVoteClicked) {
      setIncrease(-1);
      setUpVoteClicked(!upVoteClicked);
      return;
    } else if (downVoteClicked) {
      setIncrease(2);
      setDownVoteClicked(!downVoteClicked);
      setUpVoteClicked(!upVoteClicked);
    } else {
      setUpVoteClicked(!upVoteClicked);
      setIncrease(1);
    }
  };
  const counterColor = () => {
    if (number === 0) {
      return "var(--md-sys-color-tertiary)";
    } else if (number > 0) {
      return "var(--md-sys-color-primary)";
    } else {
      return "var(--md-sys-color-error)";
    }
  };

  const handleDownVoteClicked = () => {
    if (downVoteClicked === true) {
      setIncrease(1);
      setDownVoteClicked(!downVoteClicked);
      return;
    } else if (upVoteClicked === true) {
      setIncrease(-2);
      setUpVoteClicked(!upVoteClicked);
      setDownVoteClicked(!downVoteClicked);
    } else {
      setIncrease(-1);
      setDownVoteClicked(!downVoteClicked);
    }
  };
  useEffect(() => {
    setNumber(number + increase);
  }, [upVoteClicked, downVoteClicked]);
  return (
    <div className="post_wrapper">
      <div className="post_container">
        <div className="post_arrows_container">
          <BsFillArrowUpSquareFill
            className="upVote"
            color={
              upVoteClicked
                ? "var(--md-sys-color-inverse-on-surface)"
                : "var(--md-sys-color-on-surface-variant)"
            }
            onClick={handleUpVoteClicked}
          />
          <div
            className="upVotes"
            style={{
              color: counterColor(),
            }}
          >
            {number}
          </div>
          <BsFillArrowDownSquareFill
            className="downVote"
            color={
              downVoteClicked ? "red" : "var(--md-sys-color-on-surface-variant)"
            }
            onClick={handleDownVoteClicked}
          />
        </div>
        <div className="post_content_container">
          <div className="post_information">
            <h3 className="title-large">Post Information</h3>
          </div>
          <hr />
          <div className="user_information">
            <h6 className="title-small">UserName</h6>
            <h6 className="title-small">20 hrs ago</h6>
            <h6 className="title-small">
              <BsChatLeft />
              &nbsp; 8
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
