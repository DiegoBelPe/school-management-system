import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const events = [];

function createEvent(startDate, title, endDate) {
  const event = {
    id: 1, 
    title: title,
    start: startDate,
    allDay: endDate ? endDate : true 
  }
  events.push(event);
}


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
          select = {function(selectionInfo) {
            console.log(selectionInfo)
            events.push(selectionInfo)
            console.log('soy los eventos' + events)
            alert(selectionInfo.startStr, 'Some event', selectionInfo.endStr); 
          }}
        />  
      </div>    
    );
}
   
export default Schedule;




// const Schedule  = () => {
//     return (
//     <div>
//         <ScheduleComponent>
//             <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//         </ScheduleComponent>
//     </div>
//     )
// }

