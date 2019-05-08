import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    
    return (
      <>
        <h1>Landing Page</h1>

        <Link to={'/pageone'}>
            go to Page One
          </Link>
      </>
    );
  }
}

export default Landing;