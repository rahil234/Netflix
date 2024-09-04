import React, { useState, useEffect } from "react";
import "./Row.css";
import MovieCard from './MovieCard';

function Row({ title, contentApiUrl }) {
  const [shows, setShows] = useState([]);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2IzNzM4ODMxM2I0Mzk4MWY4NWQ1MjA1ODk4YTI3NCIsIm5iZiI6MTcyNTE0MzExNi4zNTI4NTcsInN1YiI6IjY2Y2YzYzg4NWVlNmY5YjA2N2JiMjFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xG2mVwXvk-lbTtKQe_2feYjxgap5-VLtLe-N7TugGRQ",
      },
    };

    fetch(contentApiUrl, options)
      .then((response) => response.json())
      .then((response) => {
        setShows(response.results);
        setloaded(true);
        // console.log(response.results);
      })
      .catch((err) => console.error(err));
  }, [contentApiUrl]);

  return (
    <>
      {loaded && (
        <div className="row-container w-100">
          <div className="title">
            <h2 className="card-title">
              <div>{title}</div>
            </h2>
          </div>
          <div className="card-viewport w-100">
            <div className="card-set flex gap-1">
              {shows.slice(0, 6).map((show) => (
                <MovieCard
                  key={show.id}
                  id={show.id}
                  title={show.title}
                  imagePath={show.backdrop_path}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Row;