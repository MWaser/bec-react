import React from 'react';
import api from 'utils/api';

import imgLogo from 'assets/logo.png';
import './style.css';

class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        api({
            url: `/api/users/`,
            method: 'Get'
        }).then(res=>{
            const { data } = res.data;
            if(data) {
                this.setState({
                    users: data
                });
            }
        })
    }

    render() {
        return (
            <div className="wapper">
                <div className="admin-header" id="link-header">  
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_header padding">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 logo padding">
                                <a href="/"><img src={imgLogo} className="img-responsive" alt="" /></a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 header_menu  padding">
                                <div className="menu">
                                    <nav className="navbar"></nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 contact_check padding">
                                <div className="contact-btn">ADMIN</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-list">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(user => {
                                return  <tr key={user.id}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.amount}</td>
                                        </tr>
                            })
                        }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Users;