// import classes from '../Page/Home.modules.css';
// import {Card} from 'react-bootstrap';
import React from "react";
import Inbox from "../Inbox";
import { Link, useNavigate } from "react-router-dom";
export function Homepage(props) {
  const navigate = useNavigate();
  navigate("/");

  return (
    <div>
      <div>
        <h2>{props.name ? `Welcome - ${props.name}` : "Let's Start"}</h2>

        <h1>
          <Link to="/inbox"></Link>
        </h1>
        <br />

        <h1
          style={{
            textAlign: "center",
            fontSize: "150px",
            backgroundColor: "pink",
          }}
        >
          Welcome on Email DashBoard!
        </h1>
      </div>
      
        
     
      <br />
      <br />
      <br />
      <Inbox />
    </div>
  );
}

export default Homepage;
