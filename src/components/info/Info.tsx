import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './info.scss';
import Calendar from '../calendar/Calendar';
import ArrowButton from '../arrowButton/ArrowButton';
import InfoNotification from '../infoNotification/InfoNotification';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { toggleVisibility } from '../../state/infoVisibility/infoVisibilitySlice';

const Info = () => {
  const [date, setDate] = useState(new Date());
  const isVisible = useSelector((state: RootState) => state.infoVisibility.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const handleCloseInfo = () => {
    dispatch(toggleVisibility());
  }

  return (
    <CSSTransition
      in={isVisible}
      timeout={1500}
      classNames="info-animation"
    >
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
              <InfoNotification
                notificationName='Meeting with new client'
                hour='4:30 PM'
              />
            </div>
          </div>
        </div>
      </aside>
    </CSSTransition>
  )
}

export default Info;