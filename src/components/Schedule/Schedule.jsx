import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';



const Schedule = () => {
    return (
      <div>
        <FullCalendar 
          plugins={[timeGridPlugin]}
          locale = 'es'
          weekends = {false}
          headerToolbar={{
            left: '',
            center: '',
            right: ''
          }}
          dayHeaderFormat = {{ weekday: 'long'}}
          slotMinTime = '6:00'
          slotMaxTime= '19:00'
          allDaySlot = {false}
          slotLabelFormat = {{hour: 'numeric',  minute: '2-digit'}}
          slotDuration = '1:00:00'
          expandRows = {true}
          aspectRatio = '1.5'
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

