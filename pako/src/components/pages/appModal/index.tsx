
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


export default function AppModal() {
    const appModalErrorState = useSelector((state: any) => state.appModalError)
    const dispatch = useDispatch();

    return (<Modal show={appModalErrorState.isOpen} onHide={() => { }}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => { dispatch() }}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}

