import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Login from './login'

export default class Menunavbar extends Component {

    w3_open(){
        var mySidebar = document.getElementById("mySidebar");
        var overlayBg = document.getElementById("myOverlay");

        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        } else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }

    }

    w3_close(){

        var mySidebar = document.getElementById("mySidebar");
        var overlayBg = document.getElementById("myOverlay");
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";

    }

    fuLogout = () => {

        var conF = window.confirm("คุณต้องการออกจากระบบ ใช่หรือไม่");
        if(conF == true){
            sessionStorage.removeItem('sessLoginID');
            sessionStorage.removeItem('sessMemberid');
            sessionStorage.removeItem('sessName');
            sessionStorage.removeItem('sessPosition');
            sessionStorage.removeItem('sessLocation');
            sessionStorage.removeItem('sessLineid');
            sessionStorage.removeItem('sessPic');
            sessionStorage.removeItem('sessStr');
            window.location.reload(false);
        }        
        window.location.reload(Login);
        //history.push(Login);
    }

    render() {
        return (
            <div>


                <div>
                    {/* Top container */}
                    <div className="w3-bar w3-top w3-large" style={{ zIndex: 4, backgroundColor: '#0084FF' }}>
                        <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.w3_open}><i className="fa fa-bars" /> &nbsp;โรงพยาบาลศูนย์สกลนคร </button>
                        <span className="w3-bar-item w3-right"><img src="img/logoSKN1.png" className="logohearder" /></span>
                    </div>
                    {/* Sidebar/menu */}
                    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left SnapbarMenu" style={{ zIndex: 3, width: 300 }} id="mySidebar"><br />
                        <div className="w3-container w3-row">
                            <div className="w3-col s4">
                                <img src="img/man.png" className="w3-circle w3-margin-right" style={{ width: 46 }} />
                            </div>
                            <div className="w3-col s8 w3-bar" style={{float: "left"}}>
                                <span style={{fontSize: 14, color: '#FCFCFC'}}> {sessionStorage.getItem('sessName')} <strong style={{fontSize: 14, color: '#FFFF33', border: 1}}> เวรเปล </strong></span><br />
                                <Link to="#" className="w3-bar-item w3-button"><i className="fa fa-envelope" /></Link>
                                <Link to="#" className="w3-bar-item w3-button"><i className="fa fa-user" /></Link>
                                <Link to="#" className="w3-bar-item w3-button"><i className="fa fa-cog" /></Link>
                            </div>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5>รายการหลัก</h5>
                        </div>
                        <div className="w3-bar-block">
                            <Link to="./" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw" />&nbsp; หน้าหลัก </Link>
                            <Link to="Preparework" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; เตรียมงาน </Link>
                            <Link to="Receivejob" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; รับงาน</Link>
                            <Link to="Sendjob" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; ส่งงาน</Link>
                            <Link to="Scanqrcode" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Scan QR</Link>
                            <Link to="#" className="w3-bar-item w3-button w3-padding" onClick={this.fuLogout}><i className="fa fa-unlock" />&nbsp; ออกจากระบบ</Link>
                            <Link to="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={this.w3_close} title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</Link>
                            <br /><br />
                        </div>
                    </nav>
                    
                </div>



            </div>
        )
    }
}
