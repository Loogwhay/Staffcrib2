import React, { Component } from 'react'
import Linkurl from './configurl';
import { Route, Link } from 'react-router-dom'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'
import PrepareAdd from './PrepareAdd'

export default class Preparework extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Mydata: [],
        };
    }

    componentDidMount() {

        this.Showdata()

    }

    Showdata() {

        fetch(Linkurl.returnURL.url + "c_Orderjob.php?module=Showdata&userID=" + sessionStorage.getItem('sessLoginID'))
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    IsLoaded: true,
                    Mydata: responseJson,
                })
            })
    }

    render() {

        var { Mydata } = this.state;

        return (
            <div className="w3-main" style={{ marginLeft: 300}}>

                <div className="ContenBK w3-row-padding w3-margin-bottom">

                    <div className="w3-container">
                        <br></br>
                        <ul className="w3-ul w3-card-4 w3-white">
                            {/* <Link  to={`/frmPrepareadd/${item.Order_ID}`} params={{ Jogid: item.Order_ID }}> */}
                            {
                                Mydata.map(item => (
                                    <Link key={item.Order_ID} to={{ pathname: "/Prepareadd", jobID: item.Order_ID }}>
                                        <li className="w3-padding-16" style={{ textAlign: "left" }}>
                                            <If condition={item.Order_type == "1"}>
                                                <Then>{() =>
                                                    <img src="img/P01.png" className="w3-left w3-circle w3-margin-right" style={{ width: 40 }} />
                                                }</Then>
                                            </If>
                                            <If condition={item.Order_type == "2"}>
                                                <Then>{() =>
                                                    <img src="img/P02.png" className="w3-left w3-circle w3-margin-right" style={{ width: 40 }} />
                                                }</Then>
                                            </If>
                                            <If condition={item.Order_type == "3"}>
                                                <Then>{() =>
                                                    <img src="img/P03.png" className="w3-left w3-circle w3-margin-right" style={{ width: 40 }} />
                                                }</Then>
                                            </If>
                                            <If condition={item.Order_type == "4"}>
                                                <Then>{() =>
                                                    <img src="img/P04.png" className="w3-left w3-circle w3-margin-right" style={{ width: 40 }} />
                                                }</Then>
                                            </If>
                                            <If condition={item.Order_type == "5"}>
                                                <Then>{() =>
                                                    <img src="img/P05.png" className="w3-left w3-circle w3-margin-right" style={{ width: 40 }} />
                                                }</Then>
                                            </If>
                                            <span className="w3-xlarge">{item.Name}</span><br />
                                            <span style={{ fontSize: 12 }}>รับ: {item.roomName} - ส่ง: {item.roomName2}</span><br />
                                            <span style={{ fontSize: 12 }}> {item.Datestart} </span>
                                            <span style={{ fontSize: 12 }}> เวลา {item.Timestart} น.</span>
                                        </li>
                                        <hr />
                                    </Link>
                                ))
                            }

                        </ul>

                    </div>


                </div>

            </div>
        )
    }
}
