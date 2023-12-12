import { useState, useEffect } from 'react';
import './info.scss';
import Calendar from '../calendar/Calendar';
import ArrowButton from '../arrowButton/ArrowButton';
import InfoNotification from '../infoNotification/InfoNotification';

const Info = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleCloseInfo = () => {
    console.log('a');
  }

  return (
    <aside>
      <div className="info-container">
        <div className="top-container">
          <ArrowButton handleClick={handleCloseInfo} />
          <div className="user-info">
            <div className="date-container">
              <span>time</span>
              <span className="hours">{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <img src="placeholder-user.svg" alt="" />
          </div>
        </div>
        <div className="info-content">
          <div className="header-content">
            <img src="dashboard.svg" alt="" />
            <div className="main-text-header">
              <h1>Today's Schedule</h1>
              <span>see your upcoming activities</span>
            </div>
          </div>
          <div className="bottom-content">
            <Calendar />
            <InfoNotification />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Info;