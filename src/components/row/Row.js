import "./Row.css";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const respone = await axios.get(props.url);
    setMovies(respone.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="rowWrapper">
      <h3 className="rowTitle"> {props.title} </h3>
      <div className="rowCard">
        {movies.map((el) => {
          return <Card title={el.title} poster={el.backdrop_path} id={el.id} />;
        })}
      </div>
    </div>
  );
};

export default Row;
