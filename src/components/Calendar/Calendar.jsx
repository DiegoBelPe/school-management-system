import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView = 'dayGridMonth'
                locale = 'es'
                headerToolbar = {{
                    center: 'addEventButton'
                }}
                customButtons = {{
                    addEventButton : {
                        text : 'Agregar eventos',
                        click : function() {
                            const dateStr = prompt('Ingresa una fecha con el siguiente formato: YYYY-MM-DD');
                            const date = new Date(dateStr + 'T00:00:00'); // will be in local time 
                            if (!isNaN(date.valueOf())) {
                                FullCalendar.addEvent({
                                    title: 'dynamic event',
                                    start: date,
                                    allDay: true
                                    });
                                alert('Great. Now, update your database...');
                            }else {
                                alert('Invalid date.');
                            }
                        }
                    }
                }}
            />  
        </div>
    );        
}

export default Calendar;