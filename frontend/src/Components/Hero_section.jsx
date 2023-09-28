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

  // useEffect(() => {
  //   checkLiveStatus();

  // }, []);


  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   const Hls = window.Hls;

  //   const handleCanPlay = () => {
  //     video.currentTime = video.duration;
  //     video.removeEventListener("canplay", handleCanPlay);
  //   };

  //   video.addEventListener("canplay", handleCanPlay);

  //   if (Hls.isSupported()) {
  //     const hls = new Hls();
  //     hls.loadSource(videoSrc);
  //     hls.attachMedia(video);
  //     console.log(videoSrc);
  //     console.log("HLS supported");
  //   } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  //     video.src = videoSrc;
  //     console.log(videoSrc);
  //     console.log("HLS not supported");
  //   }

  //   return () => {
  //     video.removeEventListener("canplay", handleCanPlay);
  //   };
  // }, [videoRef, videoSrc, live]);


  // useEffect(() => {
  //   // Connect to your Socket.io server

  //   socket.on('connect', (data) => {
  //     console.log('Connected to Socket.io server');
  //     socket.emit('getInitialStreamingValue');
  //     socket.on('initialStreamingValue', (data) => {
  //       setLive(data.tableStreaming);
  //     });
  //   });

  //   socket.on('tableStreamingUpdate', (data) => {
  //     setLive(data.tableStreaming);

  //     // Perform an action when tableStreaming value changes

  //     // You can add your logic here to handle the change
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from Socket.io server');
  //   });

  //   return () => {
  //     socket.disconnect(); // Clean up the Socket.io connection
  //   };
  // }, [socket]);


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

  // async function fetchChannelPage(channelUrl) {

  //   try {
  //     // const response = await axios.get("https://church.server.webions.co.uk/fetchYouTubeContent", {
  //     const response = await axios.get("http://localhost:8010/fetchYouTubeContent", {
  //       params: {
  //         url: channelUrl,
  //       },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching channel page:', error);
  //     return null;
  //   }
  // }

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


    // try {
    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();

    //   await page.goto(channelUrl, { waitUntil: 'domcontentloaded' });

    //   // Check for live indicators using JavaScript on the page
    //   const isLive = await page.evaluate(() => {
    //     const liveIndicator = document.querySelector('span.yt-live-badge');
    //     return !!liveIndicator; // Convert to a boolean
    //   });

    //   await browser.close();

    //   return isLive;
    // } catch (error) {
    //   console.error('Error checking live status with Puppeteer:', error);
    //   return false;
    // }


    // const $ = cheerio.load(htmlContent);
    // // 
    // // Check for live indicators on the page
    // const liveIndicator = $("html").innerHTML.includes("This video is unavailable");
    // return !liveIndicator;
  }



  return (
    <>
      <section className="hero_section">
        <div className="container-fluid p-0" style={{ position: "relative" }}>

          <iframe width="1350" height="480" src={liveStreamLink}
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
          {/* {
            live ?
              <iframe width="1350" height="480" src={liveStreamLink}
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
              :
              <h1
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "40%",
                  color: "white",
                  zIndex: "222",
                }}
              >
                No Live Stream Available
              </h1>
          } */}

          {/* 
          {live === "1" ? (
            <>
              <video
                src=""
                controls
                autoPlay
                ref={videoRef}
                style={{ height: "100vh", width: "100%" }}
              ></video>
              
            </>
          ) : (
            <h1
              style={{
                position: "absolute",
                top: "40%",
                left: "40%",
                color: "white",
                zIndex: "222",
              }}
            >
              No Live Stream Available
            </h1>
          )}
           */}
        </div>
      </section>
    </>
  );
}
