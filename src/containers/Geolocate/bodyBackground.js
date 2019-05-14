import { Component } from 'react';

export default class BodyBackground extends Component {
    componentDidMount() {
        document.body.classList.add('body-background');
    }

    componentWillUnmount () {
        document.body.classList.remove('body-background');
    }

    render () {
        return null;
    }
}
