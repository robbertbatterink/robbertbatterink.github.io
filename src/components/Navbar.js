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
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom navi fixed-top" style={{paddingLeft: "5%", paddingRight: "5%"}}>
                  <a className="navbar-brand" href="#root">Robbert Batterink</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse rounded" id="navbarCustom" style={{backgroundColor: "black"}}>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#info">About me</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact me</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        )
    }
}

export default Navibar;
