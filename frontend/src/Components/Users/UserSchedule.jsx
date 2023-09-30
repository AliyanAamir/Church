import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import axios from "axios";

export default function UserSchedule() {
  const [events, setEvents] = useState([]);
 
  useEffect(() => {

    axios
      .get(`http://localhost:8000/api/schedule/`)
      .then((response) => {
     
        setEvents(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  

 
 

  
  return (
    <>
      
      

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events ? events : []}
        
        
      />
    </>
  );
}
