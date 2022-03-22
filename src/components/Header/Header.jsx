import React from "react";
import { Card } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light p-3">
        <div class="container-fluid">
          <h1> React</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">--</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav header_ul dark ms-auto">
              <li classNames="nav-item me-4">
                <button type="button" class="btn btn-light text-muted">
                  Go to React
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Card className="m-1">
        <Card.Img variant="top" src={props.image} />
      </Card>
    </div>
  );
};

export default Header;
