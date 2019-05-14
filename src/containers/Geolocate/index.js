import React from 'react';
import './style.css';
import Geocode from "react-geocode";
import Swal from 'sweetalert2';
import BodyBackground from "./bodyBackground";

Geocode.setApiKey("AIzaSyC5kpEdaqT_U6U9ZPSpbDFvfy_rqTur4tU");
Geocode.enableDebug();

class Geolocate extends React.Component {

    goodbye = (why) => {
        Swal({ type: 'error', title: "We're sorry.", allowOutsideClick: false, html: "<div class='swal-custom-text'>" + why + "</div>", backdrop: false })
            .then(() => { window.location.href = "http://brillouinenergy.com" });
    }

    handlePosition = (position) => {
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(response => {
            const address = response.results[0].formatted_address;
            if (address.indexOf('United States') !== -1 || address.indexOf('USA') !== -1) this.props.history.push('/us/');
            else this.props.history.push('/nonus/');
        }, error => { console.error(error); });
    }

    componentDidMount() {
        if (!navigator.geolocation) this.goodbye("You must use a modern browser capable of geolocation.");
        else navigator.geolocation.getCurrentPosition(this.handlePosition, (error) => {
            if (error.code === error.PERMISSION_DENIED || error.code === error.TIMEOUT)
                this.goodbye("<p>We weren't able to determine your location. Please navigate to your web browser or mobile device's privacy settings, turn on location services and try again.</p>"
                    + "<p>This button below will redirect you to <i>brillouinenergy.com</i>. If you've activated your location services, please <a href='"+window.location.pathname+"'>refresh this page.</a></p>");
            else this.goodbye("Your browser could not determine your location.\nPlease try again later.");
        });
    }

    render() {
        return (
            <div className='msg'>
                <BodyBackground/>
                <h1>GEO-LOCATING!</h1>
                <p>Why do we need to know your location?</p>
                <p>BEC Ltd.'s current investment opportunity is subject to US Securities Law, which requires us to know whether you're visiting this website from the United States or elsewhere.</p>
            </div>
        );
    }
}

export default (Geolocate);
