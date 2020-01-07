import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import DateRange from '../../../node_modules/@wojtekmaj/react-daterange-picker';
import './style.css';

class Date extends Component {
    state = {
        date: null,
    }

    componentDidMount() {
        console.log(new Date())
        // this.setState({ date: new Date() })
    }

    onChange = date => this.setState({ date })

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