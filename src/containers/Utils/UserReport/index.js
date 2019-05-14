import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import './style.css';

export default class UserReport extends React.Component {
    state = {};

    componentDidMount() {
        axios.get('/api/user/prod').then(({ data }) => {
            this.setState({ data: data });
        });
    }

    render() {
        const columns = [
            { Header: 'EMail', accessor: 'email', minWidth: 35 },
            { Header: 'Status', accessor: 'status', minWidth: 15 },
            { Header: 'Name', accessor: 'name', minWidth: 35 },
            { Header: 'Country', accessor: 'country', minWidth: 10 },
            { Header: 'Phone Number', accessor: 'phoneNumber', minWidth: 25 }];
        return (
            <div className="utils">
                <div className="sub-container">
                    <ReactTable data={this.state.data} columns={columns} minRows={1}  />
                </div><br />
                <div>Download <a href="/api/user/csv/users">spreadsheet</a></div>
            </div>
        );
    }
}
