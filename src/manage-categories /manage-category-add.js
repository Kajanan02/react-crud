import React from 'react';
import {Button, Modal} from "react-bootstrap";

function ManageCategoryAdd({show,handleClose,handleShow}) {
    return (
        <>
            <Modal show={show} onHide={handleClose}  centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter main category"/>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter sub category"/>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ManageCategoryAdd;