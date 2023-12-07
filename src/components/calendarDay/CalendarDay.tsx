import { useState, useEffect } from 'react';
import './calendarDay.scss';

type CalendarDayProps = {
  dt: number;
  active?: boolean;
}

interface IDayInfo {
  date: number,
  weekDay: string,
}

const CalendarDay = ({ dt, active }: CalendarDayProps) => {
  const [dayInfo, setDayInfo] = useState<IDayInfo>({
    date: 0,
    weekDay: '',
  });

  useEffect(() => {
    const date = new Date(dt);
    const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    setDayInfo({
      date: date.getDate(),
      weekDay: weekDays[date.getDay()],
    });
  }, [dt]);

  return (
    <div className='calendarDay'>
      <div className="weekDay">
        {dayInfo.weekDay}
      </div>
      <div className={`weekDate ${active ? 'activeDate' : ''}`}>
        {dayInfo.date}
      </div>
    </div>
  )
}

export default CalendarDay;