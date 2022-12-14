import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./AddShoe.css";
import bg from "./images/bg.jpg";

function AddShoe() {
  const [taskArr, setTaskArr] = useState([]);
  const [inputValBrand, setInputValBrand] = useState("");
  const [inputValModel, setInputValModel] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    //? Read
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://63737d12348e9472990dd266.mockapi.io/shoes"
        );
        console.log(data);
        setTaskArr(data);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 1500);
      }
    };
    fetchData();
  }, []);

  const handleAddTask = async () => {
    if (inputValBrand.trim() && inputValModel.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "https://63737d12348e9472990dd266.mockapi.io/shoes",
          {
            brand: inputValBrand,
            model: inputValModel,
            img: inputImg,
            done: false,
          }
        );
        setTaskArr((prev) => [...prev, data]);
        setInputValBrand("");
        setInputValModel("");
        setInputImg("");
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    }
  };

  return (
    <div className="add-shoe">
      <h1>Add New Shoe</h1>
      {errorMes && <h2>{errorMes}</h2>}
      <div className="inputs">
        <input
          value={inputValBrand}
          placeholder="Brand"
          onChange={({ target: { value } }) => setInputValBrand(value)}
        />
        <input
          value={inputValModel}
          placeholder="Model"
          onChange={({ target: { value } }) => setInputValModel(value)}
        />
        <input
          value={inputImg}
          placeholder="Image url"
          onChange={({ target: { value } }) => setInputImg(value)}
        />
        <button onClick={handleAddTask}>Add Shoe</button>
      </div>

      {isLoading && <h1 className="spinner">Spinner</h1>}
      {setTaskArr.length && (
        <div className="shoe-container">
          {taskArr.map(({ brand, model, id, img, done }, mapIndex) => (
            <div className="shoe" key={id}>
              <div className="shoe-info">
                <p> Brand - {brand}</p>
                <p> Model - {model}</p>
                <p>InStock - {!done ? "V" : "X"}</p>
                <img src={img} alt={brand} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddShoe;
