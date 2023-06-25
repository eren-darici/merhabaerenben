import React from "react";
import { Jumbotron } from "./migration";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <div>
        <h2 className="display-4 pb-3 text-center">{heading}</h2>
        <p className="lead text-center pb-3">
          {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
        </p>
      </div>

    </>
  );
};

export default GetInTouch;
