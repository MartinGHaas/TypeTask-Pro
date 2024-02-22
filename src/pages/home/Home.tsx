import PageHeader from '@/components/pageHeader/PageHeader';
import './home.scss';
import { IoAddCircleOutline } from 'react-icons/io5';
import LowerTask from '@/components/lowerTask/LowerTask';

const Home = () => {
  return (
    <div className='home'>
      <PageHeader
        pageTitle='Home'
        description='See your recent activity'
      />
      <div className="main-home-content">
        <div className="active-projects">
          <div className="active-content">
            <img className="active-projects-image" src="success_man;).svg" />
            <h2>No active projects</h2>
            <p>you can create a new project</p>
            <button className="project-button">
              <IoAddCircleOutline fontSize={30} fontWeight={700} />
              create new project
            </button>
          </div>
        </div>
        <div className="recent-activity">
          a
        </div>
      </div>
      <div className="next-tasks">
        <LowerTask
          startTime={new Date()}
          title='Search inspiration for project'
          status='COMPLETED'
        />
        <LowerTask
          startTime={new Date()}
          title='Search inspiration for project'
          status='TODO' />
      </div>
    </div>
  )
}

export default Home;