import React from 'react';
import './index.scss';
const Modal = (props) => {
    return (
        <div className="modal"
            style={{
                transform: props.show ? 'translateX(-50%)' : 'translateX(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-body">
                {props.isTitle ? <h2>{props.title}</h2> : null }
                {props.children}
            </div>
            
            <div className="modal-footer">
                <button className="btn-modal" onClick={props.close}>Cancel</button>
                <button className="btn-modal" onClick={props.close}>Apply</button>
            </div>
        </div>
    )
}
export default Modal;