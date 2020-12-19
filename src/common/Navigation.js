import React from "react";
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import { navigation } from "./../utils/config"
const Navigation = () => {

  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="worldNav">
                <ul className="navbar-nav ml-4">

                  {navigation && navigation.map((nav, index) => {
                    if (nav.children && nav.children.length > 0) {
                      return <Dropdown id="dropdown-basic-link" key={index}>
                        <Dropdown.Toggle>
                          {nav.label}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {nav.children.map((subnav, index) => {
                            return <Dropdown.Item key={index} href={subnav.link}>{subnav.label}</Dropdown.Item>
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    } else {
                      return <li className="nav-item" key={index}>
                        <Link className="nav-link" to={`${nav.link}`}>{nav.label}</Link>
                      </li>

                    }

                  })}

                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header >
  );

}

export default Navigation;
