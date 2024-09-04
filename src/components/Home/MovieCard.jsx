import React, { useState, useContext } from "react";
import { VideoContext } from "../../context/VideoContext.jsx";

function MovieCard({ id, imagePath, title }) {
  const { setVideoUrl, setLoading } = useContext(VideoContext);

  function showMovie() {
    console.log("Fetching video details for movie ID:", id);

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2IzNzM4ODMxM2I0Mzk4MWY4NWQ1MjA1ODk4YTI3NCIsIm5iZiI6MTcyNTE0MzExNi4zNTI4NTcsInN1YiI6IjY2Y2YzYzg4NWVlNmY5YjA2N2JiMjFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xG2mVwXvk-lbTtKQe_2feYjxgap5-VLtLe-N7TugGRQ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let video = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (!video) {
          video = data.results.find(
            (video) => video.type === "Teaser" && video.site === "YouTube"
          );
        }

        if (!video && data.results.length > 0) {
          video = data.results.find((video) => video.site === "YouTube");
        }

        if (video) {
          const youtubeUrl = `https://www.youtube.com/embed/${video.key}`;
          setVideoUrl(youtubeUrl);
        } else {
          console.log("No available video for this movie.");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos:", error);
      });
  }

  return (
    <>
      <div className="w-[16.6666%]" onClick={showMovie}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
          alt={title}
          className="object-cover rounded-[0.2vw] hover:scale-150 transition-all"
        />
      </div>
    </>
  );
}

export default MovieCard;
