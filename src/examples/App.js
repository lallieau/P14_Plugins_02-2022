import React, { useState } from 'react';
import { Modal } from '../lib/components/Modal';
import done from '../lib/components/assets/sammy-done.png';

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Projet 14 - Plugin</h1>
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
        image={done}
      />
    </>
  );
};
