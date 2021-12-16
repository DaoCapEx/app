import React from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertModal = ({ onClose, title, body, primaryButtonText }) => {
    return (
        <Modal
            isOpen={true}
            toggle={() => {
                if (onClose) {
                    onClose();
                }
            }}
        >
            <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                    {title}
                </h5>
            </div>
            <div className="modal-body">
                <p>{body}</p>
            </div>
            <div className="modal-footer">
                {primaryButtonText && (
                    <button
                        type="button"
                        onClick={() => {
                            if (onClose) {
                                onClose();
                            }
                        }}
                        className="btn btn-primary "
                        data-dismiss="modal"
                    >
                        {primaryButtonText}
                    </button>
                )}
            </div>
        </Modal>
    );
};

AlertModal.propTypes = {
    onClose: PropTypes.func,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    primaryButtonText: PropTypes.string,
};

export default AlertModal;
