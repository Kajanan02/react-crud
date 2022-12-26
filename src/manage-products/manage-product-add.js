import React from 'react';
import {Button, Modal} from "react-bootstrap";

function ManageProductAdd({show,handleClose,handleShow}) {
    return (
        <>
            <Modal show={show} onHide={handleClose}  centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter product name"/>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter price"/>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter available quantity"/>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Brand"/>
                            </div>
                        </div>
                        <div className={"col-md-12"}>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Enter Description"
                                          id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Description</label>
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

export default ManageProductAdd;
