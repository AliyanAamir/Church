import React from 'react'

export default function PreviewStream() {

  const queryParameters = new URLSearchParams(window.location.search)
  const videoId = queryParameters.get("videoId");
  console.log(videoId);

  return (
    <>

      <iframe width="1349" height="480" src={`https://www.youtube.com/embed/${videoId}`} title="Fetching All Videos of a channel | Youtube Data API V3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </>
  )
}
