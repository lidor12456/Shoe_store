import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import axios from "axios";
import "./App.css";

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
function E404() {
  return <div> page not found</div>;
}
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

function ShoePage() {
  return <div>edit specific shoe</div>;
}
function AddShoe() {
  return <div>Add Shoe to store (api)</div>;
}

function Store() {
  const [taskArr, setTaskArr] = useState([]);
  const [inputVal, setInputVal] = useState("");
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
    if (inputVal.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "https://63737d12348e9472990dd266.mockapi.io/shoes",
          {
            task: inputVal,
            img: inputImg,
            done: false,
          }
        );
        setTaskArr((prev) => [...prev, data]);
        setInputVal("");
        setInputImg("");
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    }
  };

  //? Update
  const handleUpdate = async (id, oldDone) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://63737d12348e9472990dd266.mockapi.io/shoes/${id}`,
        {
          done: !oldDone,
        }
      );
      setTaskArr((prev) => {
        return prev.map((task) => {
          if (task.id !== id) {
            return task;
          } else {
            return data;
          }
        });
      });
      setIsLoading(false);
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  //? Delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://63737d12348e9472990dd266.mockapi.io/shoes/${id}`
      );
      console.log(data);
      console.log(taskArr);

      console.log(id);
      setTaskArr((prevState) =>
        prevState.filter((task) => {
          return task.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  return (
    <div className="App">
      <h1>Our Shoe Collection</h1>
      {errorMes && <h2>{errorMes}</h2>}
      <input
        value={inputVal}
        placeholder="Shoe"
        onChange={({ target: { value } }) => setInputVal(value)}
      />
      <input
        value={inputImg}
        placeholder="Image url"
        onChange={({ target: { value } }) => setInputImg(value)}
      />
      <button onClick={handleAddTask}>Add Shoe</button>
      {/* //? Read */}

      {isLoading && <h1 className="spinner">Spinner</h1>}
      {setTaskArr.length && (
        <div className="todos_container">
          {taskArr.map(({ brand, model, id, img, done }, mapIndex) => (
            <div className="todo" key={id}>
              <h3
                onClick={() => {
                  handleUpdate(id, done);
                }}
              >
                InStock - {done ? "V" : "X"}
              </h3>
              <h3> brand - {brand}</h3>
              <h3> model - {model}</h3>
              <img src={img} alt={brand} />
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:shoeId" element={<ShoePage />} />
        <Route path="/addshoe" element={<AddShoe />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </div>
  );
}
export default App;
