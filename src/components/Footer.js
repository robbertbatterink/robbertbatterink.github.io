import React, {Component} from 'react';
import './containers.css';

import Contact from './Contact.js';

class Footer extends Component {
    render() {
        return(
            <div style={{minHeight: 300}}>
                <Contact />
            </div>
        )
    }
}

export default Footer;
