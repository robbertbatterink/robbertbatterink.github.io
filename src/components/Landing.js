import React, {Component} from 'react';
import image from "./html-programming.jpg"
import pic from './picture.jpg'
import "./Landing.css"

class Landing extends Component {
    render() {
        return(
                <div className="landing">
                <div className="pic" style={{background: "url(" + image + ")", height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={image} style={{position: 'absolute', height: "100%", width: '100%'}} />
                        <div className="container center text-center" style={{zIndex: 10, position: 'relative', color: 'white', justifyContent: 'center', alignItems: 'center', paddingTop: 25}}>
                            <h1 className="text">ROBBERT BATTERINK</h1>
                            <h3 className="text">SOFTWARE ENGINEER</h3>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Landing;
