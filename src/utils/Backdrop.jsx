import React from "react";

const Backdrop = ({ onClose, children }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      {children}
    </div>
  );
};

export default Backdrop;
