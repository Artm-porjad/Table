import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Документ Экспертизы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}

export default MyModal