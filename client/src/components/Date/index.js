import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import DateRange from '../../../node_modules/@wojtekmaj/react-daterange-picker';
import './style.css';
import Axios from 'axios';

class Date extends Component {
    state = {
        startDate: null,
        endDate: null,
        date: null,
    }

    componentDidMount() {
        console.log(new Date())
        // this.setState({ date: new Date() })
    }

    onChange = date => {
        console.log(date)
        this.setState({ date, startDate: date[0].toDateString(), endDate: date[1].toDateString() })
        setTimeout(() => console.log(this.state), 1000)
    }

    onSubmit = () => {
        // axios.get(`/api/users/${userId}?startDate=${this.state.startDate}&endDate=${this.state.endDate}`)
    }

    render() {
        return (
            <div>
                <DateRange
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default Date;