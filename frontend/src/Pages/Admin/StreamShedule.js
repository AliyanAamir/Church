import React, { useEffect, useRef, useState } from "react";
import Schedule from "../../Components/Admin/Schedule";

export default function StreamShedule() {
  return (
    <>
      <video
        src=""
        controls
        autoPlay
        // ref={videoRef}
        muted
        style={{ display: "none" }}
      ></video>
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
              <Schedule />
            </div>
            {/* <!-- end dashbox --> */}
            <div className="modal fade" tabindex="-1" role="dialog" id="region">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <a href="#" className="close" data-bs-dismiss="modal">
                    <em className="icon ni ni-cross-sm"></em>
                  </a>
                  <div className="modal-body modal-body-md">
                    <h5 className="title mb-4">Select Your Countryy</h5>
                    <div className="nk-country-region">
                      <ul className="country-list text-center gy-2">
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/arg.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Argentina</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/aus.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Australia</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/bangladesh.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Bangladesh</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/canada.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">
                              Canada <small>(English)</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/china.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Centrafricaine</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/china.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">China</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/french.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">France</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/germany.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Germany</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/iran.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Iran</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/italy.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Italy</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/mexico.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">México</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/philipine.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Philippines</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/portugal.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Portugal</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/s-africa.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">South Africa</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/spanish.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Spain</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/switzerland.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">Switzerland</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/uk.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">United Kingdom</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="country-item">
                            <img
                              src="images/flags/english.png"
                              alt=""
                              className="country-flag"
                            />
                            <span className="country-name">United State</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="addEventPopup">
              <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Post Schedule</h5>
                    <a
                      href="#"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <em className="icon ni ni-cross"></em>
                    </a>
                  </div>
                  <div className="modal-body">
                    <form
                      action="#"
                      id="addEventForm"
                      className="form-validate is-alter"
                    >
                      <div className="row gx-4 gy-3">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label" for="event-title">
                              Post Title
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                className="form-control"
                                id="event-title"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">
                              Start Date & Time
                            </label>
                            <div className="row gx-2">
                              <div className="w-55">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-calendar"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="event-start-date"
                                    className="form-control date-picker"
                                    data-date-format="yyyy-mm-dd"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="w-45">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-clock"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="event-start-time"
                                    data-time-format="HH:mm:ss"
                                    className="form-control time-picker"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">
                              End Date & Time
                            </label>
                            <div className="row gx-2">
                              <div className="w-55">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-calendar"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="event-end-date"
                                    className="form-control date-picker"
                                    data-date-format="yyyy-mm-dd"
                                  />
                                </div>
                              </div>
                              <div className="w-45">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-clock"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="event-end-time"
                                    data-time-format="HH:mm:ss"
                                    className="form-control time-picker"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              for="event-description"
                            >
                              Post Description
                            </label>
                            <div className="form-control-wrap">
                              <textarea
                                className="form-control"
                                id="event-description"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Post Type</label>
                            <div className="form-control-wrap">
                              <select
                                id="event-theme"
                                className="select-calendar-theme form-control"
                                data-search="on"
                              >
                                <option value="event-primary">Facebook</option>
                                <option value="event-success">Instagram</option>
                                <option value="event-info">Twitter</option>
                                <option value="event-warning">Linked In</option>
                                <option value="event-danger">Youtube</option>
                                <option value="event-pink">Other</option>
                                {/* <!-- <option value="event-primary-dim">Auctions</option>
                            <option value="event-success-dim">
                              Networking events
                            </option>
                            <option value="event-info-dim">Product launches</option>
                            <option value="event-warning-dim">Fundrising</option>
                            <option value="event-danger-dim">Sponsored</option>
                            <option value="event-pink-dim">Sports events</option> --> */}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <ul className="d-flex justify-content-between gx-4 mt-1">
                            <li>
                              <button
                                id="addEvent"
                                type="submit"
                                className="btn btn-primary"
                              >
                                Schedule Post
                              </button>
                            </li>
                            <li>
                              <button
                                id="resetEvent"
                                data-bs-dismiss="modal"
                                className="btn btn-danger btn-dim"
                              >
                                Discard
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="editEventPopup">
              <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Schedule</h5>
                    <a
                      href="#"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <em className="icon ni ni-cross"></em>
                    </a>
                  </div>
                  <div className="modal-body">
                    <form
                      action="#"
                      id="editEventForm"
                      className="form-validate is-alter"
                    >
                      <div className="row gx-4 gy-3">
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              for="edit-event-title"
                            >
                              Post Title
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                className="form-control"
                                id="edit-event-title"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">
                              Start Date & Time
                            </label>
                            <div className="row gx-2">
                              <div className="w-55">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-calendar"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="edit-event-start-date"
                                    className="form-control date-picker"
                                    data-date-format="yyyy-mm-dd"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="w-45">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-clock"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="edit-event-start-time"
                                    data-time-format="HH:mm:ss"
                                    className="form-control time-picker"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">
                              End Date & Time
                            </label>
                            <div className="row gx-2">
                              <div className="w-55">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-calendar"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="edit-event-end-date"
                                    className="form-control date-picker"
                                    data-date-format="yyyy-mm-dd"
                                  />
                                </div>
                              </div>
                              <div className="w-45">
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-left">
                                    <em className="icon ni ni-clock"></em>
                                  </div>
                                  <input
                                    type="text"
                                    id="edit-event-end-time"
                                    data-time-format="HH:mm:ss"
                                    className="form-control time-picker"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              for="edit-event-description"
                            >
                              Post Description
                            </label>
                            <div className="form-control-wrap">
                              <textarea
                                className="form-control"
                                id="edit-event-description"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Post Category</label>
                            <div className="form-control-wrap">
                              <select
                                id="edit-event-theme"
                                className="select-calendar-theme form-control"
                                data-search="on"
                              >
                                <option value="event-primary">Facebook</option>
                                <option value="event-success">Instagram</option>
                                <option value="event-info">Twitter</option>
                                <option value="event-warning">Linked In</option>
                                <option value="event-danger">Youtube</option>
                                <option value="event-pink">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <ul className="d-flex justify-content-between gx-4 mt-1">
                            <li>
                              <button
                                id="updateEvent"
                                type="submit"
                                className="btn btn-primary"
                              >
                                Update Schedule
                              </button>
                            </li>
                            <li>
                              <button
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteEventPopup"
                                className="btn btn-danger btn-dim"
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="previewEventPopup">
              <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                  <div id="preview-event-header" className="modal-header">
                    <h5 id="preview-event-title" className="modal-title">
                      Placeholder Title
                    </h5>
                    <a
                      href="#"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <em className="icon ni ni-cross"></em>
                    </a>
                  </div>
                  <div className="modal-body">
                    <div className="row gy-3 py-1">
                      <div className="col-sm-6">
                        <h6 className="overline-title">Start Time</h6>
                        <p id="preview-event-start"></p>
                      </div>
                      <div className="col-sm-6" id="preview-event-end-check">
                        <h6 className="overline-title">End Time</h6>
                        <p id="preview-event-end"></p>
                      </div>
                      <div
                        className="col-sm-10"
                        id="preview-event-description-check"
                      >
                        <h6 className="overline-title">Description</h6>
                        <p id="preview-event-description"></p>
                      </div>
                    </div>
                    <ul className="d-flex justify-content-between gx-4 mt-3">
                      <li>
                        <button
                          data-bs-dismiss="modal"
                          data-bs-toggle="modal"
                          data-bs-target="#editEventPopup"
                          className="btn btn-primary"
                        >
                          Edit Schedule
                        </button>
                      </li>
                      <li>
                        <button
                          data-bs-dismiss="modal"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteEventPopup"
                          className="btn btn-danger btn-dim"
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="deleteEventPopup">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body modal-body-lg text-center">
                    <div className="nk-modal py-4">
                      <em className="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger"></em>
                      <h4 className="nk-modal-title">Are You Sure ?</h4>
                      <div className="nk-modal-text mt-n2">
                        <p className="text-soft">
                          This event data will be removed permanently.
                        </p>
                      </div>
                      <ul className="d-flex justify-content-center gx-4 mt-4">
                        <li>
                          <button
                            data-bs-dismiss="modal"
                            id="deleteEvent"
                            className="btn btn-success"
                          >
                            Yes, Delete it
                          </button>
                        </li>
                        <li>
                          <button
                            data-bs-dismiss="modal"
                            data-bs-toggle="modal"
                            data-bs-target="#editEventPopup"
                            className="btn btn-danger btn-dim"
                          >
                            Cancel
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
