import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Schedule = () => {
    return (

        <div>
              <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
        </div>
      
      )
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

