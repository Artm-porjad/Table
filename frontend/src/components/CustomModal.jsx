import React from 'react';
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
    return (
        <Modal
            id="modal-b"
            show={props.show}
            onHide={props.onHide}
            dialogClassName="modal-30w"
            aria-labelledby="example-custom-modal-styling-title"
            backdrop="static"
        >
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;