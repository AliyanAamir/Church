import React from "react";
import UserSchedule from "../../Components/Users/UserSchedule";

export default function UsersDashbord() {
  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* <!-- main title --> */}
            <div className="col-12">
              <div className="main__title">
                <h2>Dashboard</h2>
                <div className="main__title-wrap">
                  {/* <!-- search --> */}
                  <form action="#" className="main__title-form">
                    <input type="text" placeholder="Find Streaming" />
                    <button type="button">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.25998"
                          cy="8.25995"
                          r="7.48191"
                          stroke="#2F80ED"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>
                        <path
                          d="M13.4637 13.8523L16.3971 16.778"
                          stroke="#2F80ED"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </form>
                  {/* <!-- end search --> */}
                </div>
              </div>
            </div>
            {/* <!-- end main title --> */}

            <div className="col-lg-12">
              <UserSchedule/>
            </div>
            {/* <!-- end dashbox --> */}
           
          </div>
        </div>
      </main>
    </>
  );
}
