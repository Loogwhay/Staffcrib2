import React, { Component } from 'react'
import Linkurl from './configurl';
import { Route, Switch, Link } from 'react-router-dom'


export default class Content extends Component {

    constructor(props){
        super(props)
        this.state = {
            Mydata: [],
        };
    }

    componentDidMount() {

        this.Showdata()

    }

    Showdata() {

        fetch(Linkurl.returnURL.url + "c_Dashboard.php?module=Showdata&userID=" + sessionStorage.getItem('sessLoginID'))
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(responseJson);
                this.setState({
                    IsLoaded: true,
                    Mydata: responseJson,
                })

                document.getElementById("Lnum1").innerHTML = responseJson[0].Num1;
                document.getElementById("Lnum2").innerHTML = responseJson[0].Num2;
                document.getElementById("Lnum3").innerHTML = responseJson[0].Num3;
                document.getElementById("Lnum4").innerHTML = responseJson[0].Num4;

            })
    }

    render() {

        var { Mydata } = this.state;

        return (
            <div className="w3-main" style={{marginLeft: 300}}>
                                
                <div className="ContenBK w3-row-padding w3-margin-bottom">
                    <div className="w3-quarter">
                        <Link to="Preparework">
                        <div className="w3-container w3-red w3-padding-16" style={{ borderRadius: 10, margin: 10 }}>
                            <div className="w3-left"><i className="fa fa-comment w3-xxxlarge" /></div>
                            <div className="w3-right">
                                <h3> <span id="Lnum1">0</span> </h3>
                            </div>
                            <div className="w3-clear" />
                            <h4 style={{float: "left"}}>เตรียมงาน</h4>
                        </div>
                        </Link>
                    </div>
                    <div className="w3-quarter">
                        <Link to="Receivejob">
                        <div className="w3-container w3-teal w3-padding-16" style={{ borderRadius: 10, margin: 10 }}>
                            <div className="w3-left"><i className="fa fa-american-sign-language-interpreting w3-xxxlarge" /></div>
                            <div className="w3-right">
                                <h3> <span id="Lnum2">0</span> </h3>
                            </div>
                            <div className="w3-clear" />
                            <h4 style={{float: "left"}}>รับงาน</h4>
                        </div>
                        </Link>
                    </div>
                    <div className="w3-quarter">
                        <Link to="Sendjob">
                        <div className="w3-container w3-blue w3-padding-16" style={{ borderRadius: 10, margin: 10 }}>
                            <div className="w3-left"><i className="fa fa-ambulance w3-xxxlarge" /></div>
                            <div className="w3-right">
                                <h3> <span id="Lnum3">0</span> </h3>
                            </div>
                            <div className="w3-clear" />
                            <h4 style={{float: "left"}}>ส่งงาน</h4>
                        </div>
                        </Link>
                    </div>
                    <div className="w3-quarter">
                        <Link to="Joball">
                        <div className="w3-container w3-orange w3-text-white w3-padding-16" style={{ borderRadius: 10, margin: 10 }}>
                            <div className="w3-left"><i className="fa fa-users w3-xxxlarge" /></div>
                            <div className="w3-right">
                                <h3><span id="Lnum4">0</span></h3>
                            </div>
                            <div className="w3-clear" />
                            <h4 style={{float: "left"}}>จำนวนงานทั้งหมด</h4>
                        </div>
                        </Link>
                    </div>
                </div>
                <hr />

                
            </div>
        )
    }
}
