import React, { createContext, useContext, useRef } from "react";

// Create the Video Context
const VideoContext = createContext();

// Create a custom hook for using the Video Context
export function useVideo() {
  return useContext(VideoContext);
}

// Create the VideoProvider component
export function VideoProvider({ children }) {
  const videoRef = useRef(null);

  return (
    <VideoContext.Provider value={videoRef}>
      {children}
    </VideoContext.Provider>
  );
}