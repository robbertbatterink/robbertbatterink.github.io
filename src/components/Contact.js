import React, {Component} from 'react';
import './containers.css';

class Contact extends Component {
    render() {
        return(
            <div style={{backgroundColor: "#6AA4B8"}}>
            <div className="containerLeft bg-dark" >
                <h1>Contact information</h1> <br/>
                Name: Robbert Batterink<br/>
                Address: Stroekmaat 35, Westerbork<br/>
                Phone: 0621325787<br/>
                Email: robbertbatterink@hotmail.nl / r.t.batterink@st.hanze.nl<br/>
                linkedin: https://www.linkedin.com/in/robbert-batterink-765621161/<br/>
                CV: https://docs.google.com/document/d/1LGvHwWE4dARPpfFQHYaH_k4-m78wNSQ4t8lU6HASM2g/edit?usp=sharing
            </div>
            </div>
        )
    }
}

export default Contact;
