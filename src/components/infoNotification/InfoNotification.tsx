import './infoNotification.scss';

type NotificationProps = {
  notificationName: string;
  hour: string
}

const InfoNotification = ({ notificationName, hour }: NotificationProps) => {
  return (
    <div className='infoNotification-containers'>
      <div className="nextNotification">
        <img className="notification-ico" src="nice_move_notification.svg" />
        <div className="notification-data">
          <div className="notification-title">
            {notificationName}
          </div>
          <div className="notification-hour">
            <img src="clock.svg" />
            <span>{hour}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoNotification;