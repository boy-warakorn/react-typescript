import React from "react";
import "./ErrorModal.css";

interface ErrorModalProps {
  onClick: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onClick }) => {
  return (
    <div className='modal'>
      <b>Please entered a text!</b>
      <button>
        <b onClick={onClick}>Confirm</b>
      </button>
    </div>
  );
};

export default ErrorModal;
