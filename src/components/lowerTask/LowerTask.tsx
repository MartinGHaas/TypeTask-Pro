import './lowerTask.scss'
import { FaPlay, FaRegClock } from 'react-icons/fa';
import { BiStopwatch } from 'react-icons/bi';

interface LowerTaskProps {
  startTime: Date;
  title: string;
  status: "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "COMPLETED";
}

const LowerTask = ({ startTime, title, status }: LowerTaskProps) => {
  return (
    <div className="lower-task">
      <div className="task-timer-info">
        <button className="start-task-button">
          <FaPlay />
        </button>
        <div className="task-timer">
          <h4>Starts at</h4>
          <div className="task-starts">
            <FaRegClock />
            {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
      <div className="tasks-info-stats">
        <h3 className="task-title">{title}</h3>
        <div className="task-stats">
          <div className={`ball-stats ${status}`}></div>
          <span className="stats-title">{status.replace('_', ' ').toLowerCase()}</span>
        </div>
      </div>
      <div className="remind-task-button">
        <BiStopwatch />
        Remind me
      </div>
    </div>
  );
}

export default LowerTask;