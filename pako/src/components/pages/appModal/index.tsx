
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';


export default function AppModal() {

    const appModalErrorState = useSelector((state: any) => state?.settingsReducers?.appModalError)
    const dispatch = useDispatch();
    const closeFn = () => { dispatch({ type: ACTIONS.MODAL_ERROR.CLOSE_MODAL }) }
    return (<Modal show={appModalErrorState.isOpen} onHide={closeFn}>
        <Modal.Header closeButton>
            <Modal.Title>{appModalErrorState.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{appModalErrorState.message}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeFn}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}

