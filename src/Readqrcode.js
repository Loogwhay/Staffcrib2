import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Popup from "reactjs-popup";
import Modal from 'react-awesome-modal';
import './css/cssPopup.css'
import Linkurl from './configurl';

export default class Readqrcode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Mydata: [],
            txt_id: '',
            txt_user: '',
            txt_roomid: '',
            txt_str: '',
            result: 'No result',
            visible : false
        };

        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {

        //this.Showdata()
        var jobid = this.props.location.receiveID;
        this.setState({
            txt_id: this.props.location.receiveID,
            txt_user: sessionStorage.getItem('sessLoginID'),
            txt_str: this.props.location.frmstr
        })

    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data,
                txt_roomid: data
            })

            this.openModal()

        }
    }
    handleError = err => {
        console.error(err)
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    Confirmedata = () => {



        const { txt_id } = this.state;
        const { txt_roomid } = this.state;
        const { txt_user } = this.state;
        const { txt_str } = this.state;

        const method = "POST";
        const body = new FormData();
        body.append("t_id", txt_id);
        body.append("t_user", txt_user);
        body.append("t_roomid", txt_roomid);
        body.append("t_str", txt_str);
        fetch(Linkurl.returnURL.url + "c_Receivejob.php?module=Inser", { method, body })
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





        this.closeModal();

    }

    render() {
        return (
            <div className="w3-main" style={{ marginLeft: 300}}>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
                <p>
                    <input type="hidden" value={this.state.txt_id} onChange={event => this.setState({ txt_id: event.target.value })} style={{ width: 100 }} />
                    <input type="hidden" value={this.state.txt_roomid} onChange={event => this.setState({ txt_roomid: event.target.value })} style={{ width: 100 }} />
                    <input type="hidden" value={this.state.txt_user} onChange={event => this.setState({ txt_user: event.target.value })} style={{ width: 100 }} />
                    <input type="hidden" value={this.state.txt_str} onChange={event => this.setState({ txt_str: event.target.value })} style={{ width: 100 }} />
                </p>


                {/*<Popup trigger={<button className="button"> Open Modal </button>} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>&times;</a>
                            <div className="header"> ยืนยันการรับ </div>
                            <div className="content">
                                {"  "}
                            </div>

                            <div className="actions">
                                <button> <i className="fa fa-check-square-o" /> ยืนยัน </button>
                                <button onClick={() => { console.log("modal closed "); close(); }} >
                                   <i className="fa fa-window-close" /> ยกเลิก
                                </button>
                            </div>

                        </div>
                    )}
                </Popup>*/}

                <Modal
                    visible={this.state.visible}
                    width="300"
                    height="200"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h3> ยืนยันการรับ </h3>

                        <p> <img src="img/confirm-48.png" className="w3-circle w3-margin-right" style={{ width: 90 }} /> </p>

                        <button onClick={this.Confirmedata}> <i className="fa fa-check-square-o" /> ยืนยัน </button>
                        <button onClick={() => this.closeModal()} > <i className="fa fa-window-close" /> ยกเลิก </button>

                    </div>
                </Modal>


            </div>
        )
    }
}
