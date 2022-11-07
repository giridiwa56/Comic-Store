import React from "react";

const Header = () => {
    return(
  <header className="header-top">
    <div className="container">
      <div className="col-12 col-md-12 col-sm-12 pt-2">
        <div className="pull-left text-wel">
          <i className="bi bi-whatsapp"></i>{" "}
          <span className="fw-bolder">+6282125520057</span>
        </div>
        <div className="pull-right text-wel">
          <i className="bi bi-geo-alt"></i>{" "}
          <span className="fw-bolder">Larangan Utara, Kota Tangerang</span>
        </div>
      </div>
    </div>
  </header>
        )
};

export default Header;
