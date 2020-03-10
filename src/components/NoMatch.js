import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div>
    <p>404! The page was not Found!</p>
    <Link to="/"> Go To HomePage</Link>{" "}
    
  </div>
);

export default NoMatch;
