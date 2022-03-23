import React from "react";
import { Offcanvas } from "react-bootstrap";
import './style.css';

const Index = ({ handleClose, show, placement , children }) => {
  return (
    <>
      <Offcanvas
        className='sideBar-small-canvas-main'
        placement={placement}
        show={show}
        onHide={handleClose}
        
      >
        {children}
      </Offcanvas>
    </>
  );
};

export default Index;
