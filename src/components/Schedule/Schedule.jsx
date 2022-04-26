import { useState, useEffect } from 'react';
import useSWR from 'swr';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Schedule.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Schedule() {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   const  fetchData = async () => {
  //     const response = await fetch('http://localhost:8080/api/schedules');
  //     const newEvents = await (await response).json();
  //     setEvents(newEvents);
  //   };
  //   fetchData();
  // }, []);

  // const { data: events, error } = useSWR('http://localhost:8080/api/schedules', fetcher);
  // if (error) {
  //   return <div>Tenemos un problema...</div>;
  // }
  // if (!events) {
  //   return (
  //     <div className={styles.loading}>
  //       <CircularProgress />
  //     </div>
  //   );
  // }
  // const [date, setDate] = useState('');
  const handleDateClick = (DateClickArg) => {
    console.log(DateClickArg);
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        locale="es"
        weekends={false}
        headerToolbar={{
          left: '',
          center: '',
          right: '',
        }}
        editable
        selectable
        selectHelper
        dateClick={handleDateClick}
        dayHeaderFormat={{ weekday: 'long' }}
        slotMinTime="6:00"
        slotMaxTime="19:00"
        allDaySlot={false}
        slotLabelFormat={{ hour: 'numeric', minute: '2-digit' }}
        slotDuration="1:00:00"
        expandRows
        aspectRatio="1.5"
        // events={events}
      />
    </div>
  );
}

export default Schedule;
