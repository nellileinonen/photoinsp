import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Modal.scss';

/*
 * TODO
 * 1) Trap focus in modal: https://tinloof.com/blog/how-to-create-an-accessible-react-modal/
 * 2) Use Portal to place the modal in the right place in DOM tree (after navigation bar).
 *    This is necessary so that keyboard focus will be in logical place when modal opens.
 *    Now the modal is at the end of the page. Make sure you can still send link to /info
 *    and that works with Portal.
 *    https://levelup.gitconnected.com/lets-build-a-functional-reusable-modal-component-in-react-with-portals-edff0b8d4bf7
 */

const Modal: React.FC = ({ children }) => {
  let history = useHistory();
  // TODO: read again this https://www.carlrippon.com/react-refs-typescript/
  const modalRef = useRef<HTMLInputElement>(null);

  /* Close modal by navigating to the root */
  const closeModal = () => {
    history.replace({pathname: '/'});
  };

  /* If mouse is clicked outside modal, close modal */
  const handleClickOutside = (e: any) => {
    if (modalRef.current !== null && (!modalRef.current.contains(e.target))) {
      closeModal();
    }
  };

  /* Close modal if mouse clicked outside of it */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  /* Close modal with ESC (keycode 27) */
  useEffect(() => {
    function keyListener(e: any) {
      if (e.keyCode === 27) {
        closeModal();
      }
    }
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });

  return (
    <div className='modal-bg' role='dialog' aria-modal='true'>
      <div ref={modalRef} className='modal-wrapper'>
        <button onClick={() => closeModal()} className='close'>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
