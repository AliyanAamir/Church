import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import axios from "axios";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [check,setCheck] = useState(0)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    // Define the API endpoint URL
    // Make the GET request using Axios
    axios
      .get(`http://localhost:8000/api/schedule/`)
      .then((response) => {
     
        setEvents(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [check]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
  const handleEventClick = (e)=>{
   
    axios
    .delete(`http://localhost:8000/api/schedule/${e.event._def.publicId}/`)
    .then((response) => {
      alert("Event Deleted SuccessFully");
      setCheck(prev=>(prev+1))
    })
  }
  const handleSubmit = () => {
    setLoading(true)
    // Make a POST request using Axios
    const $ = window.$
    $('#exampleModal').modal('hide')
    axios
      .post("http://localhost:8000/api/schedule/", formData)
      .then((response) => {
        // Handle the successful response, e.g., close the modal
        alert("Schedule saved successfully:");
        // Close the modal programmatically or reset form, etc.
        
        setFormData({
          title: "",
          date: "",
        })
       setCheck(prev=>(prev+1))
       setLoading(false)
      })
      .catch((error) => {
        // Handle errors
        console.error("Error saving schedule:", error);
      });
  };
  const eventContent = (arg) => {
    
    return (
      <>
      <div className="d-flex  align-center cus-parent">

          <div style={{borderRadius:'50%',backgroundColor:"white",width:'20px',height:'20px'}} className=" cus-outer justify-center align-center mr-2">

         <i onClick={()=>handleEventClick(arg)} style={{cursor:'pointer'}} className="fa-regular fa-trash cus-tool"></i>
          </div>

        <span style={{color:'white'}}>{arg.event._def.title}</span>
      </div>
      </>
    );
  };
  return (
   
    <>
      {/* <!-- Button trigger modal --> */}
      {loading&& 
   
   <div className="modal-fade" style={{height:'100%',width:'100%',transform:'translate(-50%,-50%)' ,top:'50%',left:'50%',position:'absolute',zIndex:'9999',backgroundColor:'black'}}>
   <div class="spinner-sv" ></div>
    </div>}
      <button
        type="button"
        class="btn btn-primary mt-3 mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Schedule
      </button>

      {/* <!-- Modal --> */}
      

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events ? events : []}
        // eventClick={handleEventClick}
        eventContent={eventContent}
      />
      <div
        class="modal fade"
        style={{
          backgroundColor:'transparent',
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Schedule A Stream
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Title
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  onChange={handleChange}
                  aria-label="Sizing example input"
                  value={formData.title}
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Date
                  </span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  onChange={handleChange}
                  name="date"
                  value={formData.date}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={handleSubmit} class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
