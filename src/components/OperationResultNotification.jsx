import React from 'react';
import { Modal } from 'react-bootstrap';

const modalTemplate = (modalVisibility, closeModal, modalTitle, modalBodyText) => {
  return (
    <Modal show={modalVisibility} onHide={() => closeModal()}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBodyText}</Modal.Body>
    </Modal>
  );
};

const OperationResult = (status, modalVisibility, closeModal, showOnSucess) => {
  if (status === 'received') {
    if (showOnSucess) {
      return '';
    }
    const modalTitle = 'Success';
    const modalBodyText = 'Your operation was successful';
    return modalTemplate(modalVisibility, closeModal, modalTitle, modalBodyText);
  }
  if (status === 'failed') {
    const modalTitle = 'Error';
    const modalBodyText = 'Check Your Internet and Try again';
    return modalTemplate(modalVisibility, closeModal, modalTitle, modalBodyText);
  }
  return '';
};

export default OperationResult;
