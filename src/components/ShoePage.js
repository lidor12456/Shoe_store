import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

function ShoePage() {
  const [shoeArr, setShoeArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://63737d12348e9472990dd266.mockapi.io/shoes/${params.shoeId}`
        );
        console.log(data);
        setShoeArr([data]);
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

  const handleUpdate = async (id, oldDone) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://63737d12348e9472990dd266.mockapi.io/shoes/${id}`,
        {
          done: !oldDone,
        }
      );
      setShoeArr((prev) => {
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

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://63737d12348e9472990dd266.mockapi.io/shoes/${id}`
      );
      console.log(data);
      console.log(shoeArr);

      console.log(id);
      setShoeArr((prevState) =>
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

  // console.log(params);
  const displayData = () => {
    return (
      <>
        <h1>SpecificProduct</h1>
        <h1>{params.shoeId}</h1>

        <div className="App">
          {errorMes && <h2>{errorMes}</h2>}

          {isLoading && <h1 className="spinner">Spinner</h1>}
          {setShoeArr.length && (
            <div className="todos_container">
              {shoeArr.map(({ brand, model, id, img, done }, mapIndex) => (
                <div className="todo" key={id}>
                  <h3
                    onClick={() => {
                      handleUpdate(id, done);
                    }}
                  >
                    InStock - {!done ? "V" : "X"}
                  </h3>
                  <h3>
                    <Link to={`/store/${id}`}>brand - {brand}</Link>
                  </h3>
                  {/* <h3> brand - {brand}</h3> */}
                  <h3> model - {model}</h3>
                  <h3></h3>
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
      </>
    );
  };
  return <div>{displayData()}</div>;
}

export default ShoePage;
