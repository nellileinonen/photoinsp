import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Modal.scss';

// TODO: make sure the modal is accessible:
// https://tinloof.com/blog/how-to-create-an-accessible-react-modal/

const Modal: React.FC = ({ children }) => {
  let history = useHistory();

  // TODO: read again this https://www.carlrippon.com/react-refs-typescript/
  const modalRef = useRef<HTMLInputElement>(null);

  // If mouse is clicked outside modal, close modal by navigating back in history
  const handleClickOutside = (e: any) => {
    if (modalRef.current !== null && (!modalRef.current.contains(e.target))) {
      history.goBack();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const closeModal = () => {
    history.goBack();
  };

  return (
    <div className='modal-bg'>
      <div ref={modalRef} className='modal-wrapper'>
        {/*goes back to mainpage<Link to='/'>
          X
        </Link>*/}
        <button onClick={() => closeModal()} className='close'>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
