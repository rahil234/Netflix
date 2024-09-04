import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainView from "./MainView";
import "./Home.css";
import { VideoProvider } from "../../context/VideoContext";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

function Home() {
  return (

      <VideoProvider>
        <VideoPlayer></VideoPlayer>
        <div className="home-container">
          <Nav />
          <MainView />
          <Footer />
        </div>
      </VideoProvider>

  );
}

export default Home;
