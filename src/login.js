import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Linkurl from './configurl';
import './css/csslogin.css';

export default class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txt_username: '',
            txt_passwd: ''
        };
        //const frmproduct = useForm();

    }

    fuChecklogin = () => {

        if (this.state.txt_username == "") {
            alert("กรุณาใส่ Username ด้วยครับ !");
            return false;
        } else if (this.state.txt_passwd == "") {
            alert("กรุณาใส่รหัสผ่านด้วยครับ !");
            return false;
        } else {

            const { txt_username } = this.state;
            const { txt_passwd } = this.state;

            const method = "POST";
            const body = new FormData();
            body.append("t_user", txt_username);
            body.append("t_pass", txt_passwd);
            fetch(Linkurl.returnURL.url + "c_Checklogin.php?module=checklogin", { method, body })
                .then(res => res.json())
                .then(data => {
                    //alert(JSON.stringify(data, null, "\t"))
                    if (data == "") {
                        alert("ข้อมูลล็อกอินไม่ถูกต้องกรุณาตรวจสอบใหม่อีกครั้ง !");
                    } else {
                        //sessionStorage.setItem('Sessionlogin', JSON.stringify(data));
                        sessionStorage.setItem('sessLoginID', data[0].ID);
                        sessionStorage.setItem('sessMemberid', data[0].member_ID);
                        sessionStorage.setItem('sessName', data[0].fullname);
                        sessionStorage.setItem('sessPosition', data[0].member_Positon);
                        sessionStorage.setItem('sessLocation', data[0].location_Name);
                        sessionStorage.setItem('sessLineid', data[0].member_Lineid);
                        sessionStorage.setItem('sessPic', data[0].member_Pic);
                        sessionStorage.setItem('sessStr', data[0].member_Str);

                        window.location.reload(false);

                    }

                });

        }

    }

    


    render() {
        return (

            <div className="App">
                <form className="modalLogin-content animate" action="" method="post">

                    <div className="login-wrap">
                    <div className="login-html">
                        <div className="logoSKN">
                            <img src="img/logoSKN1.png" width={143} height={143} />
                        </div>
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">LOGIN</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">

                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input type="text" className="input" value={this.state.txt_username} onChange={event => this.setState({ txt_username: event.target.value })} />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input type="password" className="input" data-type="password" value={this.state.txt_passwd} onChange={event => this.setState({ txt_passwd: event.target.value })} />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" defaultChecked />
                                    <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <button type="button" className="button" onClick={this.fuChecklogin}>Login</button>
                                </div>
                                <div className="hr" />
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>

                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" defaultValue="Sign Up" />
                                </div>
                                <div className="hr" />
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </form>
            </div>


        )
    }
}
