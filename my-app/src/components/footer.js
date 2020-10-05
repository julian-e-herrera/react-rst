import React from "react";
import { Popup } from './popup';

export function Footer() {
  return (
    <div>
            <Popup /> 
      <div className="main-footer">
        <div className="container">
      {/* <button id="btn-abrir-popup" class="btn-abrir-popup">Admin</button> */}
        <hr />
          <div className="row">
            <p className="col-sm">
            &copy;{new Date().getFullYear()} <a href='https://www.linkedin.com/in/julian-e-herrera/'> Julian Herrera </a> | All rights reserved |
            Terms Of Service | Privacy
             </p>
        </div>
      </div>
    </div>
    </div>
  );
}

