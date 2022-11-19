import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./LandingPage.css";
import bg from "./images/bg.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Custome Shoe Shop</h1>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus tellus nec ipsum facilisis tempus. Nulla eleifend ante eget
          diam vestibulum luctus. Suspendisse sem ipsum, porttitor ut massa sed,
          gravida fermentum dolor. Proin molestie, quam eu dictum porta, odio
          magna convallis leo, ac lobortis leo nisl ac mauris. Nullam aliquam
          tortor eu fringilla finibus. Donec aliquam nulla et ex efficitur, nec
          feugiat ligula finibus. Ut iaculis purus eget dui tincidunt
          scelerisque. Nullam lorem libero, ultrices eu tincidunt quis, molestie
          ac justo. Sed consectetur hendrerit tempor. Nulla hendrerit
          ullamcorper finibus. Aliquam auctor turpis vitae mi maximus congue.
          Praesent porta laoreet neque, quis egestas leo pulvinar ac. Sed ex
          arcu, volutpat vel tincidunt at, viverra id nibh. Pellentesque at ante
          blandit libero blandit interdum quis id diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus tellus nec ipsum facilisis tempus. Nulla eleifend ante eget
          diam vestibulum luctus. Suspendisse sem ipsum, porttitor ut massa sed,
          gravida fermentum dolor. Proin molestie, quam eu dictum porta, odio
          magna convallis leo, ac lobortis leo nisl ac mauris. Nullam aliquam
          tortor eu fringilla finibus. Donec aliquam nulla et ex efficitur, nec
          feugiat ligula finibus. Ut iaculis purus eget dui tincidunt
          scelerisque. Nullam lorem libero, ultrices eu tincidunt quis, molestie
          ac justo. Sed consectetur hendrerit tempor. Nulla hendrerit
          ullamcorper finibus. Aliquam auctor turpis vitae mi maximus congue.
          Praesent porta laoreet neque, quis egestas leo pulvinar ac. Sed ex
          arcu, volutpat vel tincidunt at, viverra id nibh. Pellentesque at ante
          blandit libero blandit interdum quis id diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus tellus nec ipsum facilisis tempus. Nulla eleifend ante eget
          diam vestibulum luctus. Suspendisse sem ipsum, porttitor ut massa sed,
          gravida fermentum dolor. Proin molestie, quam eu dictum porta, odio
          magna convallis leo, ac lobortis leo nisl ac mauris. Nullam aliquam
          tortor eu fringilla finibus. Donec aliquam nulla et ex efficitur, nec
          feugiat ligula finibus. Ut iaculis purus eget dui tincidunt
          scelerisque. Nullam lorem libero, ultrices eu tincidunt quis, molestie
          ac justo. Sed consectetur hendrerit tempor. Nulla hendrerit
          ullamcorper finibus. Aliquam auctor turpis vitae mi maximus congue.
          Praesent porta laoreet neque, quis egestas leo pulvinar ac. Sed ex
          arcu, volutpat vel tincidunt at, viverra id nibh. Pellentesque at ante
          blandit libero blandit interdum quis id diam.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
