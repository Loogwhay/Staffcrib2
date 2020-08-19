import React, { Component } from 'react'
import Linkurl from './configurl';
import {
    MDBDataTable,
    MDBBadge,
} from 'mdbreact';


export default class Joball extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Mydata: [],
        };
        //const frmproduct = useForm();

    }

    componentDidMount() {

        this.Showdata()

    }

    //แสดงข้อมูลในตาราง
    Showdata2() {

        fetch(Linkurl.returnURL.url + "c_Joball.php?module=Showdata&userID=" + sessionStorage.getItem('sessLoginID'))
            .then(res => res.json())
            .then(json => {
                alert(json);
                let Mydata = json;
                let { rows } = json;
                rows = rows.map((row, key) => ({
                    ...row,
                    Edit: (
                        <MDBBadge
                            className='w-100'
                            searchvalue={key}
                            key={key}
                        >
                        </MDBBadge>
                    )

                }));

                Mydata = {
                    columns: [
                        {
                            label: 'รหัส',
                            field: 'ID',
                            sort: 'asc',
                            width: 20
                        },
                        {
                            label: 'กิจกรรม',
                            field: 'Order_list',
                            sort: 'asc',
                            width: 400
                        },
                        {
                            label: 'ตึกที่รับ',
                            field: 'roomName',
                            sort: 'asc',
                            width: 200
                        },
                        {
                            label: 'ตึกที่ส่ง',
                            field: 'roomName2',
                            sort: 'asc',
                            width: 200
                        },
                        {
                            label: 'วันที่',
                            field: 'Order_date',
                            sort: 'asc',
                            width: 150
                        }
                    ],
                    rows
                };
                this.setState({ Mydata });
            });

    }

    Showdata() {

        fetch(Linkurl.returnURL.url + "c_Joball.php?module=Showdata&userID=" + sessionStorage.getItem('sessLoginID'))
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

            <div className="w3-main" style={{ marginLeft: 300 }}>

                <div className="ContenBK w3-row-padding w3-margin-bottom">

                    <div className="w3-container">
                        <br></br>
                        <ul className="w3-ul w3-card-4 w3-white">

                            <table class="w3-table w3-bordered">
                                <tr>
                                    <th>Jobid</th>
                                    <th>กิจกรรม</th>
                                    <th>ตึกที่รับ</th>
                                    <th>ตึกที่ส่ง</th>
                                </tr>
                                {
                                    Mydata.map(item => (
                                    <tr>
                                        <td>{item.ID}</td>
                                        <td>
                                            <span>{item.Order_list}</span><br/>
                                            <span style={{fontSize: 12}}>วันที่ {item.Order_date}</span>
                                        </td>
                                        <td>{item.roomName}</td>
                                        <td>{item.roomName2}</td>
                                    </tr>
                                    ))
                                }
                            </table>

                        </ul>

                    </div>


                </div>

            </div>

        )
    }
}
