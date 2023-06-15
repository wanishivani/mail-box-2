import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
export default function Inbox() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Go to Inbox
        </Button>
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>Email Box</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <Link to='/email'><h1>Compose mail</h1> </Link>  
       <Link to='/email'><h1>Sent mail</h1> </Link>   

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
