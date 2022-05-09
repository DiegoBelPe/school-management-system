import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import useSWR from 'swr';
import Modals from '../../pages/Modals';
import styles from './Calendar.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Calendar() {
  const { data: events, error } = useSWR('https://backend-school-management.herokuapp.com/api/calendar', fetcher);
  if (error) {
    return <div>Tenemos un problema...</div>;
  }
  if (!events) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.fondo}>
      <Modals />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="es"
        events={events}
      />

    </div>
  );
}

export default Calendar;
