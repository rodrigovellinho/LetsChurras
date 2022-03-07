import { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackdropModal, ModalStyle } from "./styles";

const Backdrop = (props) => {
  return (
    <div onClick={props.onClose}>
      <BackdropModal />
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <ModalStyle>
      <div className="content">{props.children}</div>
    </ModalStyle>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
