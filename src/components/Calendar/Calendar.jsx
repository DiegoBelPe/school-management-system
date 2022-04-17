import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import useSWR from 'swr';
import Modals from '../../pages/Modals';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Calendar() {
  const { data: events, error } = useSWR('http://localhost:8080/api/events', fetcher);
  if (error) {
    return <div>Tenemos un problema...</div>;
  }
  if (!events) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Modals />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="es"
      />

    </div>
  );
}

export default Calendar;
