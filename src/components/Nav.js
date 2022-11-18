import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__li">
          <Link to="/store">Store</Link>
        </li>
        <li className="nav__li">
          <Link to="/addshoe">Add Shoe</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
