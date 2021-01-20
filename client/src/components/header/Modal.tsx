import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Modal.css';

// TODO: an excellent reference for modal view

const Modal: React.FC = ({ children }) => {
  let history = useHistory();

  // TODO: read again this https://www.carlrippon.com/react-refs-typescript/
  const modalRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (modalRef.current !== null && (!modalRef.current.contains(e.target))) {
      //console.log('modalRef.current.contains(e.target): ', modalRef.current.contains(e.target));
      history.goBack();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div ref={modalRef} className='modal-wrapper'>
      <Link to='/'>
        X
      </Link>
      {children}
    </div>
  );
}

export default Modal;
