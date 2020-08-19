import React, { useState } from 'react';

export default function login2() {

    const initialState = {userName: "", passWord: ""};
    const [account, setAccount] = useState(initialState);

    return (
        <div>

                <p>#Debug : {JSON.stringify(account)}</p>

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
                                        <input type="text" className="input" onChange={e => {setAccount({...account, userName: e.target.value})}} />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input type="password" className="input" data-type="password" onChange={e => {setAccount({...account, passWord: e.target.value})}} />
                                    </div>
                                    <div className="group">
                                        <input id="check" type="checkbox" className="check" defaultChecked />
                                        <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                                    </div>
                                    <div className="group">
                                        <button type="button" className="button">Login</button>
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
