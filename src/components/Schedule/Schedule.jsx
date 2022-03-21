import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';




const Schedule = () => {
    return (
      <div>
        <FullCalendar 
          plugins={[timeGridPlugin, interactionPlugin]}
          locale = 'es'
          weekends = {false}
          headerToolbar={{
            left: '',
            center: '',
            right: ''
          }}
          editable = {true}
          selectable = {true}
          selectHelper = {true}
          dayHeaderFormat = {{ weekday: 'long'}}
          slotMinTime = '6:00'
          slotMaxTime= '19:00'
          allDaySlot = {false}
          slotLabelFormat = {{hour: 'numeric',  minute: '2-digit'}}
          slotDuration = '1:00:00'
          expandRows = {true}
          aspectRatio = '1.5'
          events ="http://localhost:8080/api/shcedule"
        />  
      </div>    
    );
}
   
export default Schedule;




