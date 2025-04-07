import { Container } from "./styles";
import React from 'react'; 
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
//import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:prabhjoytchavan@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:prabhjoytchavan@gmail.com">prabhjoytchavan@gmail.com</a>
        </div>
        <div>
        <a href="tel:+17012156684">
          <img src={phoneIcon} alt="Phone No" />
        </a>
        <a href="tel:+17012156684">
          (+1) 701-215-6684
        </a>
        </div>  
      </div>
    </Container>
  )
}