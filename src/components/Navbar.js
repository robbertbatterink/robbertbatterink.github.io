import React, {Component} from 'react';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

import $ from 'jquery';
import "./Navbar.css";

class Navibar extends Component {
    componentDidMount() {
    $(document).ready(function() {
        $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navi").addClass("compressed");
    } else {
      $(".navi").removeClass("compressed");
    }
  });
});
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom navi fixed-top" style={{paddingLeft: "5%", paddingRight: "5%"}}>
                  <a className="navbar-brand" href="#">Robbert Batterink</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse rounded" id="navbarCustom" style={{backgroundColor: "black"}}>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#">About me</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact me</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        )
    }
}

export default Navibar;
