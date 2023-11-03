import { ReactNode, useEffect, useState } from 'react';
import './modal.scss';

type ModalProps = {
  children: ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className={`modal ${showModal ? ' fade-in' : ''} ${className ? className : ''}`} >
      <div className="modalBox">
        {children}
      </div>
    </div>
  )
}

export default Modal;
