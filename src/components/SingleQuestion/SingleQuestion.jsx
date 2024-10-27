// src/components/SingleQuestion.js
import React from "react";
import classes from "./singleQuestion.module.css";
import { FaArrowCircleRight } from "react-icons/fa"



const SingleQuestion = ({ question }) => {
  return (
    <div className={classes.container}>
      <div className={classes.Question}>Question</div>
      <div className={classes.Question__title}>
        {/* <hr style={{width:"30%"}} />
         */}
        <FaArrowCircleRight size={25} style={{ color: "rgb(81, 108, 240)" }} />

        {question.question}
      </div>
      <div className={classes.Question__desc}>
        <p>{question.description}</p>
      </div>
      <hr style={{ padding: "-15px", color }} />
      <div className={classes.Title}>Answer From The Community</div>

      <hr />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SingleQuestion;
