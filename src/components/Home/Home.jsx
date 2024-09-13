import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainView from "./MainView";
import { VideoProvider } from "../../context/VideoContext";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

function Home() {
  return (
    <VideoProvider>
      <VideoPlayer />
      <Nav />
      <MainView />
      <Footer />
    </VideoProvider>
  );
}

export default Home;
