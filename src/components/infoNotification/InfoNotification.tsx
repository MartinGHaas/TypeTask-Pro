import './infoNotification.scss';

const InfoNotification = () => {
  return (
    <div className='infoNotification-containers'>
      <div className="nextNotification">
        <img className="notification-ico" src="nice_move_notification.svg" />
        <div className="notification-data">
          <div className="notification-title">
            Meeting with New Client
          </div>
          <div className="notification-hour">
            <img src="clock.svg" />
            <span>04:30 pm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoNotification;