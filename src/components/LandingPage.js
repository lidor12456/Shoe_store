import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  return (
    <div>
      Welcome
      {/* <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/addshoe">Add Shoe</Link> */}
    </div>
  );
}

export default LandingPage;
