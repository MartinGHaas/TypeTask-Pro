import { useRef, useState } from 'react';
import ArrowButton from '../arrowButton/ArrowButton';
import './calendar.scss';
import CalendarDay from '../calendarDay/CalendarDay';

const Calendar = () => {
  const msDay = useRef(86400000);
  const [activeDate] = useState<Date>(new Date());
  const [days] = useState<Date[]>(
    Array.from({ length: 7 }, (_, i) => new Date(Date.now() + (i - 2) * msDay.current))
  );

  return (
    <div className="calendar-container">
      <div className="top-calendar">
        <span className='calendarMonthAndYear'>
          {`${activeDate.toLocaleString('en-US', { month: 'long' })}, ${activeDate.getFullYear()}`}
        </span>
        <div className="button-calendar-container">
          <ArrowButton direction='left' />
          <ArrowButton direction='right' />
        </div>
      </div>
      <div className="calendar-content">
        <div className="dates-container">
          {days.map((day) => {
            return <CalendarDay dt={day.getTime()} active={activeDate.getDate() === day.getDate()} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar;