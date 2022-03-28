import React, { useEffect, useState } from 'react';
import Modals from '../../pages/Modals'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';




const Calendar = () => {
    return (
        <div>
            <Modals></Modals>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView = 'dayGridMonth'
                locale = 'es'
            />  
   
        </div>
    );        
}

export default Calendar;