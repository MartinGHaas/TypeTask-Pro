import PageHeader from '@/components/pageHeader/PageHeader';
import './notifications.scss';

const Notifications = () => {
  return (
    <div className='notifications'>
      <PageHeader
        pageTitle='Notifications'
        description='See your recent activity'
      />
    </div>
  )
}

export default Notifications;