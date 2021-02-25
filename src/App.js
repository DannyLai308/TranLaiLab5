import React, {useState} from 'react';
import CalendarModal from './components/CalendarModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 


function App() {
  const [ShowCalendar, setShowCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <button onClick={()=>setShowCalendar(true)} className="btnOpen">Open Pop-Up Calendar</button>
      <CalendarModal show={ShowCalendar} notShow={()=>setShowCalendar(false)}>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
      </CalendarModal>
    </div>
  );
}

export default App;
