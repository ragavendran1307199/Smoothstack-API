import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface OffCanvasExampleProps {
    name: string;
    placement: 'start' | 'end' | 'top' | 'bottom';
}


export const OffCanvasExample: React.FC<OffCanvasExampleProps> = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a style={{ cursor: "pointer" }} onClick={handleShow} className="me-2">
                {name}
            </a>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Edit User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                    <label className="form-label">Role</label>
                    <input type="email" className="form-control" />
                    <Button style={{ marginTop: "20px" }}>submit</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

