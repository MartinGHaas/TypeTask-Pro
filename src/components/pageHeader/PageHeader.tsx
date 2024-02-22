import './pageHeader.scss';

interface PageHeaderProps {
  pageTitle: string;
  description: string;
}

const PageHeader = ({ pageTitle, description }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="info-header">
        <h1 className="page-title">{pageTitle}</h1>
        <p className="page-description">{description}</p>
      </div>
    </div>
  )
}

export default PageHeader;