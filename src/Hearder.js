import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default class Hearder extends Component {

    w3_close(){

        var mySidebar = document.getElementById("mySidebar");
        var overlayBg = document.getElementById("myOverlay");
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";

    }
    
    render() {
        return (
            <div>
                
                <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    
                    <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
                        
                        <header className="w3-container Hearder" style={{ paddingTop: 22 }}>
                            <h5 style={{float: "left"}}><b><i className="fa fa-dashboard" /> My Dashboard</b></h5>
                            <span style={{float: "right"}}><Link to="./"><i className="fa fa-home" />Home</Link></span>
                        </header>
                        
                        
                    </div>
            </div>
        )
    }
}
