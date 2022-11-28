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
                <Modal.Title id="example-custom-modal-styling-title" style={{ fontSize: "19px" }}>
                    Документ № в СЭД:
                    {/*<span style={{ margin: "0 5px" }}>{props.data[1]}</span>*/}
                    {/*поступил в МЦ*/}
                    {/*<span style={{ fontSize:"14.25px", margin: "0 5px", backgroundColor: "#00c9a7", color: "white", lineHeight: "1.7", padding: "0.25em 0.7em", borderRadius: "10rem" }}>{props.dat[props.index_row][2]}</span>*/}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}

export default MyModal