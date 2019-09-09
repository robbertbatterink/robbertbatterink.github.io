import React, {Component} from 'react';
import './containers.css';

import Grid from '@material-ui/core/Grid';

import { FaLinkedin, FaAddressCard } from 'react-icons/fa'
import { MdHome, MdContactPhone, MdContactMail } from "react-icons/md";

class Contact extends Component {
    render() {
        return(
            <div style={{paddingTop: 100}}>
                <div className="header text-center">Contact information</div> <br/>
                <div className='footer center intro'>
                <Grid container className="text-center">
                    <Grid item xs={12} sm={4}>
                        <FaLinkedin className="contact"/> : <a href="https://www.linkedin.com/in/robbert-batterink-765621161/" target="_blank"  style={{color: "white"}}>Robbert Batterink</a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MdContactMail className="contact"/> : robbertbatterink@hotmail.nl
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MdHome className="contact"/> : <a href="https://www.google.nl/maps/place/Stroekmaat+35,+9431+MD+Westerbork/@52.8610347,6.6036936,17z/data=!3m1!4b1!4m5!3m4!1s0x47c81f559f80f7a5:0x4987df330592ddb6!8m2!3d52.8610347!4d6.6058823?hl=nl&authuser=0" target="_blank"  style={{color: "white"}}>Stroekmaat 35, Westerbork</a>
                    </Grid>
                </Grid>
                <Grid container className="text-center">
                    <Grid item xs={12} sm={4}>
                        <FaAddressCard className="contact"/> : <a href="https://docs.google.com/document/d/1LGvHwWE4dARPpfFQHYaH_k4-m78wNSQ4t8lU6HASM2g/edit?usp=sharing" target="_blank" style={{color: "white"}}>Curriculum vitae</a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MdContactMail className="contact"/> : r.t.batterink@st.hanze.nl
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MdContactPhone className="contact"/> : 06 21 32 57 87
                    </Grid>
                </Grid>
                <hr style={{backgroundColor: 'white', width: '90%'}}/>

                </div>
            </div>
        )
    }
}

export default Contact;
