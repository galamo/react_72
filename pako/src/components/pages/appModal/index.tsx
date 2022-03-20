
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';


export default function AppModal() {
    const appModalErrorState = useSelector((state: any) => state.appModalError)
    const dispatch = useDispatch();

    return (<Modal show={appModalErrorState.isOpen} onHide={() => { }}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => { dispatch({ type: ACTIONS.MODAL_ERROR.CLOSE_MODAL }) }}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}

