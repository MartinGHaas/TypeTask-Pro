import PageHeader from '@/components/pageHeader/PageHeader';
import './tasks.scss';

const Tasks = () => {
  return (
    <div className='tasks'>
      <PageHeader
        pageTitle='Tasks'
        description='See your recent activity'
      />
    </div>
  )
}

export default Tasks;