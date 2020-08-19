import React, { Component } from 'react'
import Linkurl from './configurl';
import { Route, Link } from 'react-router-dom'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'
import './css/cssTools.css'

export default class PrepareAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Mydata: [],
            txt_user: sessionStorage.getItem('sessLoginID'),
            txt_num1: 0,
            txt_num2: 0,
            txt_num3: 0,
            txt_num4: 0,
            txt_num5: '',
            txt_num6: '',
            orderType: ''
        };
    }

    componentDidMount() {

        //this.Showdata()
        var jobid = this.props.location.jobID;
        this.showdata(jobid);
    }

    showdata(ID){

        fetch(Linkurl.returnURL.url + "c_Orderjob.php?module=Showeditdata&idEdit="+ID)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    IsLoaded: true,
                    txt_jobid: responseJson[0].Order_ID,
                    txt_num1: Number(responseJson[0].Order_carnum1),
                    txt_num2: Number(responseJson[0].Order_carnum2),
                    txt_num3: Number(responseJson[0].Order_oxygennum),
                    txt_num4: Number(responseJson[0].Authoritiesnum),
                    orderType: responseJson[0].Order_type
                })
                
            })

    }

    Savedata = () => {
        
        const { txt_jobid } = this.state;
        const { txt_user } = this.state;
        const { txt_num1 } = this.state;
        const { txt_num2 } = this.state;
        const { txt_num3 } = this.state;
        const { txt_num4 } = this.state;
        const { txt_num5 } = this.state;
        const { txt_num6 } = this.state;

        const method = "POST";
        const body = new FormData();
        body.append("t_jobid", txt_jobid);
        body.append("t_user", txt_user);
        body.append("t_num1", txt_num1);
        body.append("t_num2", txt_num2);
        body.append("t_num3", txt_num3);
        body.append("t_num4", txt_num4);
        body.append("t_num5", txt_num5);
        body.append("t_num6", txt_num6);
        fetch(Linkurl.returnURL.url + "c_Orderjob.php?module=Inser", { method, body })
            .then(res => res.json())
            .then(data => {
                //alert(JSON.stringify(data, null, "\t"))
                if (data == "0") {
                    alert("ระบบทำการบันทึกข้อมูลเรียบร้อยแล้วครับ");
                    window.location.reload();
                }else{
                    alert("ข้อมูลเกิดการผิดพลาดกรุณาแจ้งเจ้าหน้าที่ IT");
                }

            });

    }

    addnumber(str, tnum){
        
        if(str == "+"){
            if(tnum == "1"){

                this.setState({
                    txt_num1: this.state.txt_num1 + 1
                  });

            }else if(tnum == "2"){

                this.setState({
                    txt_num2: this.state.txt_num2 + 1
                  });

            }else if(tnum == "3"){

                this.setState({
                    txt_num3: this.state.txt_num3 + 1
                  });

            }else if(tnum == "4"){

                this.setState({
                    txt_num4: this.state.txt_num4 + 1
                  });

            }
        }else if(str == "-"){
            
            if(tnum == "1"){

                this.setState({
                    txt_num1: this.state.txt_num1 - 1
                  });

            }else if(tnum == "2"){

                this.setState({
                    txt_num2: this.state.txt_num2 - 1
                  });

            }else if(tnum == "3"){

                this.setState({
                    txt_num3: this.state.txt_num3 - 1
                  });

            }else if(tnum == "4"){

                this.setState({
                    txt_num4: this.state.txt_num4 - 1
                  });

            }

        }

    }

    render() {

        return (

            <div className="w3-main" style={{ marginLeft: 300 }}>
                <div className="ContenBK w3-row-padding w3-margin-bottom">

                <form>
                    <div className="w3-twothird">
                      <br></br>
                        <table className="w3-table w3-striped w3-white" style={{ width: '100%', height: '75vh' }}>
                            <tbody>
                                <tr>
                                    <td><i className="fa fa-filter w3-text-blue w3-large" /></td>
                                    <td>เลขที่งาน</td>
                                    <td><i>{this.state.txt_jobid}</i></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-area-chart w3-text-blue w3-large" /></td>
                                    <td>ระดับความฉุกเฉิน</td>
                                    <td>
                                        <If condition={this.state.orderType == "1"}>
                                            <Then>{() =>
                                                 <div style={{ backgroundColor: '#FF0000', width: '100%', height: 25, borderRadius: 5, border: 1 }}>&nbsp;</div>
                                            }</Then>
                                        </If>
                                        <If condition={this.state.orderType == "2"}>
                                            <Then>{() =>
                                                 <div style={{ backgroundColor: '#FF0099', width: '100%', height: 25, borderRadius: 5, border: 1 }}>&nbsp;</div>
                                            }</Then>
                                        </If> 
                                        <If condition={this.state.orderType == "3"}>
                                            <Then>{() =>
                                                 <div style={{ backgroundColor: '#FFFF00', width: '100%', height: 25, borderRadius: 5, border: 1 }}>&nbsp;</div>
                                            }</Then>
                                        </If> 
                                        <If condition={this.state.orderType == "4"}>
                                            <Then>{() =>
                                                 <div style={{ backgroundColor: '#66CC00', width: '100%', height: 25, borderRadius: 5, border: 1 }}>&nbsp;</div>
                                            }</Then>
                                        </If> 
                                        <If condition={this.state.orderType == "5"}>
                                            <Then>{() =>
                                                 <div style={{ backgroundColor: '#FFFFFF', width: '100%', height: 25, borderRadius: 5, border: 1 }}>&nbsp;</div>
                                            }</Then>
                                        </If>                                      
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-wheelchair w3-text-red w3-large" /></td>
                                    <td>จำนวนรถนั่ง</td>
                                    <td><button onClick={this.addnumber.bind(this, '-', '1')}><i className="fa fa-chevron-circle-left" /></button><i> <input type="text" value={this.state.txt_num1} onChange={event => this.setState({ txt_num1: event.target.value })} style={{ width: 30 }} style={{ width: 30 }} /></i> <button onClick={this.addnumber.bind(this, '+', '1')}><i className="fa fa-chevron-circle-right" /></button></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-bed w3-text-yellow w3-large" /></td>
                                    <td>จำนวนรถนอน</td>
                                    <td><button onClick={this.addnumber.bind(this, '-', '2')}><i className="fa fa-chevron-circle-left" /></button><i> <input type="text" value={this.state.txt_num2} onChange={event => this.setState({ txt_num2: event.target.value })} style={{ width: 30 }} style={{ width: 30 }} /></i> <button onClick={this.addnumber.bind(this, '+', '2')}><i className="fa fa-chevron-circle-right" /></button></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-fire-extinguisher w3-text-red w3-large" /></td>
                                    <td>จำนวนออกซิเจน</td>
                                    <td><button onClick={this.addnumber.bind(this, '-', '3')}><i className="fa fa-chevron-circle-left" /></button><i> <input type="text" value={this.state.txt_num3} onChange={event => this.setState({ txt_num3: event.target.value })} style={{ width: 30 }} style={{ width: 30 }} /></i> <button onClick={this.addnumber.bind(this, '+', '3')}><i className="fa fa-chevron-circle-right" /></button></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-users w3-text-blue w3-large" /></td>
                                    <td>เจ้าหน้าที่</td>
                                    <td><button onClick={this.addnumber.bind(this, '-', '4')}><i className="fa fa-chevron-circle-left" /></button><i> <input type="text" value={this.state.txt_num4} onChange={event => this.setState({ txt_num4: event.target.value })} style={{ width: 30 }} style={{ width: 30 }} /></i> <button onClick={this.addnumber.bind(this, '+', '4')}><i className="fa fa-chevron-circle-right" /></button></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-info w3-text-red w3-large" /></td>
                                    <td>เลขรถ</td>
                                    <td><i> <input type="text" value={this.state.txt_num5} onChange={event => this.setState({ txt_num5: event.target.value })} style={{ width: 30 }} style={{ width: 100 }} /></i> </td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-share-alt w3-text-green w3-large" /></td>
                                    <td>เลขถัง</td>
                                    <td> <i><input type="text" value={this.state.txt_num6} onChange={event => this.setState({ txt_num6: event.target.value })} style={{ width: 30 }} style={{ width: 100 }} /></i> </td>
                                </tr>
                            </tbody></table>

                        <br></br>
                        <div className="group">
                            <input type="hidden" value={this.state.txt_jobid} onChange={event => this.setState({ txt_jobid: event.target.value })} style={{ width: 30 }} />
                            <input type="hidden" value={this.state.txt_user} onChange={event => this.setState({ txt_user: event.target.value })} style={{ width: 30 }} />
                            <button type="button" className="button button2" onClick={this.Savedata}>[ บันทึกรายการ ]</button>
                        </div>

                    </div>
                </form>

                </div>
            </div>

        )
    }
}
