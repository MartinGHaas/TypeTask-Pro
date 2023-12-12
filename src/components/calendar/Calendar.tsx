import { useMemo, useRef, useState } from 'react';
import ArrowButton from '../arrowButton/ArrowButton';
import './calendar.scss';
import CalendarDay from '../calendarDay/CalendarDay';

const Calendar = () => {
  const msDay = useRef(86400000);
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => activeDate.getTime() + (i - 2) * msDay.current), [activeDate]);

  enum Directions {
    right,
    left
  }

  const handleArrowClick = (direction: Directions) => {
    const newDate = new Date(activeDate);
    newDate.setDate(newDate.getDate() + (direction === Directions.right ? 1 : - 1));
    setActiveDate(newDate);
  }

  return (
    <div className="calendar-container">
      <div className="top-calendar">
        <span className='calendarMonthAndYear'>
          {`${activeDate.toLocaleString('en-US', { month: 'long' })}, ${activeDate.getFullYear()}`}
        </span>
        <div className="button-calendar-container">
          <ArrowButton direction='left' handleClick={() => { handleArrowClick(Directions.left) }} />
          <ArrowButton direction='right' handleClick={() => { handleArrowClick(Directions.right) }} />
        </div>
      </div>
      <div className="calendar-content">
        <div className="dates-container">
          {days.map((dayTime) => {
            const day = new Date(dayTime);
            return <CalendarDay dt={day.getTime()} active={activeDate.getDate() === day.getDate()} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar;