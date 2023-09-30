import React, { useEffect, useRef, useState } from "react";
// import Axios from "axios";
import { useVideo } from "../Context/VideoContext";
// import io from 'socket.io-client';
// import cheerio from 'cheerio';
// import puppeteer from 'puppeteer';
// import axios from 'axios';

const liveStreamLink = `https://www.youtube.com/embed/live_stream?channel=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}`;

// const socket = io('http://localhost:8010');
export default function HeroSection() {
  const [live, setLive] = useState(true);
  const videoRef = useVideo();
  const videoSrc = "http://localhost:8080/hls/abdi.m3u8";

 

  async function checkLiveStatus() {
    // const htmlContent = await fetchChannelPage(liveStreamLink);

    // if (htmlContent) {
    const isLive = await isLiveStreamActive(liveStreamLink);
    if (isLive) {
      setLive(true);
    } else {
      setLive(false);
    }
    // }
  }



  async function isLiveStreamActive(channelUrl) {

    try {
      // const response = await axios.get("https://church.server.webions.co.uk/fetchYouTubeContent", {
      const response = await fetch("http://localhost:8010/fetchYouTubeContent?" + new URLSearchParams({
        url: channelUrl,
      }));

      return response.data;
    } catch (error) {
      console.error('Error fetching channel page:', error);
      return null;
    }


 
  }



  return (
    <>
      <section className="hero_section">
        <div className="container-fluid p-0" style={{ position: "relative",display:'flex' ,justifyContent:'center' }}>

          <iframe width="1350" height="480" src={liveStreamLink}
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
       

       
        </div>
      </section>
    </>
  );
}
