import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  nav,
  button,

} from "reactstrap";
export class Navigation extends Component {
  render() {
    return (
  
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container" >
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#page-top" >
           ostad
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
            style={{display:"contents"}}
          >
            <ul className="nav navbar-nav navbar-right" style={{flexDirection:"row-reverse"}}>
              <li>
                <a href="#features" className="page-scroll">
                  ویژگی ها
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  درباره
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                اعلانات
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  ارتباط با ما
                </a>
              </li>  
               <li>
                <a  href="login" style={{color:"Highlight",fontWeight:"bold"}}>
                  ورود
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
