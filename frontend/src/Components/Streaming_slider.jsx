import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Streaming_slider() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&type=video&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        )
          .then((data) => data.json())
          .then((data) => data.items);

        setVideos(res);
        console.log(res);
      } catch (ex) {}
    };
    const $ = window.$
    function carousalLaunch(){
      $('.section__carousel').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
          0 : {
            items: 2,
          },
          576 : {
            items: 3,
          },
          768 : {
            items: 3,
            margin: 30,
          },
          992 : {
            items: 4,
            margin: 30,
          },
          1200 : {
            items: 5,
            margin: 30,
            dots: false,
            mouseDrag: true,
            slideBy: 6,
            smartSpeed: 400,
          },
        }
      });
    }
    fetchVideos();
    
    setTimeout(() => {
      carousalLaunch();
    }, 1000);
  }, []);


  

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__carousel-wrap">
                <div className="section__carousel owl-carousel" id="similar">
                  {videos
                    .filter((x) => x.snippet.title != "Deleted video")
                    .map((x) => (
                      <div className="card">
                        <Link
                          to={`/PreviewStream?videoId=${x.snippet.resourceId.videoId}`}
                          className="card__cover"
                        >
                          <img src={x.snippet.thumbnails.default.url} alt="" />
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>

                        <h3 className="card__title">
                          <Link
                            to={`/PreviewStream?videoId=${x.snippet.resourceId.videoId}`}
                          >
                            {x.snippet.title}
                          </Link>
                        </h3>
                        <ul className="card__list">
                          <li>
                            {new Date(x.snippet.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </li>
                        </ul>
                      </div>
                    ))}

          </div>

                <button
                  className="section__nav section__nav--cards section__nav--prev"
                  data-nav="#similar"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.72559L16.25 7.72559"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="section__nav section__nav--cards section__nav--next"
                  data-nav="#similar"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 7.72559L0.75 7.72559"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
