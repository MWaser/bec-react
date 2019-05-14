/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';

import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Header } from 'components';
import Geocode from "react-geocode";
import Swal from 'sweetalert2';
import axios from 'axios';

import teamImg1 from '../../assets/RobertWGeorge.jpg';
import teamImg2 from '../../assets/RobertGodes.jpg';
import teamImg6 from '../../assets/MarcoAniballi.jpg';
import chartImg from '../../assets/copvsmarket.png';
import BodyBackground from "../Geolocate/bodyBackground";

Geocode.setApiKey("AIzaSyC5kpEdaqT_U6U9ZPSpbDFvfy_rqTur4tU");
Geocode.enableDebug();

class Home extends React.Component {

    state = {
        page1: true
    }

    logout = () => {
        this.props.cookies.set('userInfo', { status: '' }, { path: '/' });
        if (window.location.pathname === '/us/') this.props.history.push('/us/home');
        else if (window.location.pathname === '/us/home') this.props.history.push('/us/');
        else if (window.location.pathname === '/nonus/') this.props.history.push('/nonus/home');
        else if (window.location.pathname === '/nonus/home') this.props.history.push('/nonus/');
    }

    goodbye = (why) => {
        Swal({
            type: 'error', title: "We're sorry.", allowOutsideClick: false,
            html: "<div class='swal-custom-text'>" + why + "</div>", backdrop: false
        }).then(() => { window.location.href = "http://brillouinenergy.com" });
    }

    handlePosition = (position) => {
        var site = (window.location.pathname.startsWith("/us")) ? 'us' : 'nonus';
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(response => {
            const address = response.results[0].formatted_address;
            var ip = (address.indexOf('United States') !== -1 || address.indexOf('USA') !== -1) ? 'us' : 'nonus';
            if (site !== ip) {
                if (this.props.cookies.get('env') !== 'prod') {
                    alert("You're not outside the US!  The production server would redirect you!");
                    this.setState({ site: site });
                } else if (site !== 'us') this.props.history.push('/us/');
            }
            else if (site === 'us') {
                Swal({
                    type: 'warning', title: "You're located in the United States.",
                    showCancelButton: true, confirmButtonText: 'Yes', cancelButtonText: 'No', allowOutsideClick: false,
                    html: "<h4> Do you certify that you are an accredited investor?</h4>"
                }).then((result) => {
                    if (result.value) { this.setState({ site: site }); }
                    else { this.goodbye("BEC Ltd.'s current investment opportunity is only available to accredited US investors.\nCheck back later for other opportunities!"); }
                })
            } else { this.setState({ site: site }); }
        }, error => { console.error(error); });
    }

    componentDidMount() {
        axios.get('/api/user/txtotals').then(res => { if (res.data) { this.setState({ bannerData: res.data[0] }) } });
        var userinfo = this.props.cookies.get('userInfo');
        if (typeof userinfo === 'undefined') userinfo = { status: '' };
        this.setState({ user: userinfo });
        this.props.cookies.set('userInfo', userinfo, { path: '/' });
        if (!window.location.pathname.startsWith("/us/home")) {
            if (!navigator.geolocation) this.goodbye("You must use a modern browser capable of geolocation.");
            else navigator.geolocation.getCurrentPosition(this.handlePosition, (error) => {
                if (error.code === error.PERMISSION_DENIED || error.code === error.TIMEOUT)
                    this.goodbye("<p>We weren't able to determine your location. Please navigate to your web browser or mobile device's privacy settings, turn on location services and try again.</p>"
                        + "<p>This button below will redirect you to <i>brillouinenergy.com</i>. If you've activated your location services, <a href='"+window.location.pathname+"'>refresh this page.</a></p>");
                else this.goodbye("Your browser could not determine your location.\nPlease try again later.")
            });
        } else this.setState({ site: (window.location.pathname.startsWith("/us") ? 'us' : 'nonus') });
    }

    addCommasToNumber = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

    render() {
        if (!this.state.site) {
            return (
                <div className='msg'>
                    <BodyBackground />
                    <h1>GEO-LOCATING!</h1>
                    <p>Why do we need to know your location?</p>
                    <p>BEC Ltd.'s current investment opportunity is subject to us Securities Law, which requires us to know whether you're visiting this website from the United States or elsewhere.</p>
                </div>
            )
        }
        var bannerData = this.state.bannerData;
        if (!bannerData) { return null; }
        return (
            <div className="wapper">
                <div className={`banner ${bannerData ? 'banner-show' : ''}`}>
                    <div className="banner-title">
                        {(this.state.site === 'us') && `The BSD Unit Sale is now Live!`}
                        {(this.state.site === 'nonus') &&
                            `ATTENTION!  US Citizens and residents - you must use <Link to='/us/'>this site</Link> instead.`}
                        {!((typeof this.state.user === 'undefined') || this.state.user.status === '') &&
                            <div className="header-user">{this.state.user.name} &nbsp; <a onClick={this.logout}>Log Out</a></div>
                        }
                    </div>
                    <div className="banner-body">
                        <div className="banner-body-item container">
                            <div>Total Units in Fund: <span className="banner-number">1,000,000,000</span></div>
                            <div>Available Units Remaining: <span className="banner-number">{bannerData ? this.addCommasToNumber(1000000000 - bannerData.shares) : ''}</span></div>
                        </div>
                        <div className="banner-body-item container">
                            <div>Accounts Available: <span className="banner-number">1,999 (299 US)</span></div>
                            <div>Accounts Remaining: <span className="banner-number">{bannerData ? this.addCommasToNumber(1999 - bannerData.allAccts) : ''} ({bannerData ? this.addCommasToNumber(299 - bannerData.usAccts) : ''} US)</span></div>
                        </div>
                    </div>
                    <Header showPrequalify={(this.props.cookies.get('env') !== 'prod')} site={this.state.site} />
                    <div className="slider">
                        <div className="container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main_slider padding">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding"></div>

                                <div className="slider_content">
                                    <h1>WELCOME TO BEC LTD.</h1>
                                    <p>FUNDING THE EVOLUTION OF CLEAN, LOW COST, <br />RENEWABLE ENERGY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="token" id="token">
                    <div className="container">
                        <div className="line1">BEC Ltd. is providing an opportunity for investors to participate in</div>
                        <div className="line2">Brillouin Energy's Series D Preferred Share offering</div>
                        <div id="link-about" >
                            <div className="txtlines"><p align="justify">
                                &nbsp; &nbsp; &nbsp; BEC Ltd. is a not for profit corporation that has secured the exclusive rights to Brillouin Energy's Series D Preferred Share offering and is raising funds to acquire the shares.
                                Holders in the Brillouin Series D (BSD) Unit Fund (<a href='/BrillouinSummary.pdf' target="_blank">summary</a>) will receive dividends from BEC Ltd. under the terms of the Brillouin Energy
                                Preferred Share Agreement.&nbsp;  BEC Ltd. will distribute all dividend revenues received from Brillouin Energy Corp. to BSD unit holders equally on a per unit basis.</p>
                            </div>
                            <ul>
                                <li>Brillouin Energy Corp. will distribute 20% of its net profit to BEC Ltd. until the total
                                distributed profit reaches five times the initial fund value, after which</li>
                                <li>Brillouin Energy Corp. will distribute 10% of its net profit to BEC Ltd. until the total
                                distributed profit reaches ten times the initial fund value, after which</li>
                                <li>Brillouin Energy Corp. will distribute 5% of its net profit to BEC Ltd. in perpetuity</li>
                            </ul><br /><br /><br />
                            <div className="line1">
                                <iframe src="https://player.vimeo.com/video/309529419" width="640" height="360" title="video" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="meet-team" id="team">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-hedding text-center padding">
                            <h2>MEET THE BOARD OF DIRECTORS</h2>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-box-part padding" style={{ padding: '0 0 100px 90px' }}>
                            {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding"></div> */}
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg1} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert W. George II<br /> Chairman</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Robert W. George II<br /> Chairman</h3>
                                        <p>Bob has a broad based technical leadership career spanning over 40 years. He has led several companies as a CEO including Commerce Direct Systems,
                                            Inc., Imagineering International, Inc., and Denning Mobile Robotics, Inc. which he successfully took public and managed for over a decade.</p>
                                    </div>
                                </div>
                            </div><div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg2} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert Godes <br /> Board Member</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3 >Robert Godes <br /> Board Member</h3>
                                        <p>{this.state.page1
                                            ? <span>After 25 years experience as an innovator in identifying and developing various clean technology products, Robert Godes founded Brillouin Energy.  He has closely studied and has a
                                                deep understanding of applied science, most engineering disciplines, quantum mechanics, general physics, high energy and condensed matter physics, electronics, control systems, programming, and electro chemistry.
                                                <br /><button onClick={() => this.setState({ page1: false })} className="next">next >></button></span>
                                            : <span>Mr. Godes holds a B.Sc. in Electrical Engineering from Ohio Northern University including product design and commercialization, and in providing creative solutions for product development, marketing and
                                                international licensing and joint ventures. Previously he was CEO of several companies including Commerce Direct Systems, Inc. Napa, CA, Imagineering International, Inc., Nashua, NH and Denning Mobile Robotics, Inc. Wilmington, MA.
                                                <br /><button onClick={() => this.setState({ page1: true })} className="prev"> {'<< '}prev</button></span>}</p>
                                    </div>
                                </div>
                            </div><div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg6} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Marco Aniballi <br /> Managing Director</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Marco Aniballi <br /> Managing Director</h3>
                                        <p>Marco is a veteran entrepreneur, strategist and consultant. He began working with startups in the mid 80s and aside from a 4 year stint at Microsoft Corp, has been working with, for or in startups for nearly 30 years. For BEC Ltd.
                                            Marco will act as an initial board member as well as oversee the operations of the Company focussing on making unitholder communications and dividend processing as frictionless as possible. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq" id="faq">
                    <div className="faq1" id="faq1" style={{ paddingTop: '50px' }}>
                        <div className="container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding">
                                <h2 data-toggle="collapse" data-target="#faq-collapse" id="faq-btn" className="collapsed" style={{ cursor: 'pointer' }}>FAQ</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-bottom collapse in" id="faq-collapse">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding">
                            <h4>Why did you set up a separate company? </h4>
                            <p>Brillouin Energy Corporation is focused on the development and commercialization of the technology that will revolutionize the energy industry.
                                BEC Ltd. is focused on communicating to unit holders the progress of their investment and distributing the benefits of that investment as they occur. </p>
                            <br /><br />

                            <h4>Why are you limiting the sale to 299 U.S. investors and up to 1,999 total investors? </h4>
                            <p>U.S. Securities law can force BEC Ltd. to be classified as a public company if it has more than 2,000 unit holders or more than 300 US unit holders.  BEC Ltd. would like to avoid being classified as public at this stage.</p>
                            <br /><br />

                            <h4>How will the fund's initial value be calculated? </h4>
                            <p>The fund's initial value will be calculated as the average price of all units sold times the total number of units in the fund.</p><br /><br />

                            <h4>How long until I get to 5X return?</h4>
                            <p>We don't know, but based on Brillouin Energy reaching various COP milestones, here are the market sizes they anticipate targeting</p><br /><br />
                            <img src={chartImg} style={{ width: '100' }} className="img-responsive" alt="" />
                            <br /><br />

                            <h4>How do I buy my units?</h4>
                            <p>Click on the BuyNow button to access the point of sale from this website. First you will be asked to log in and complete the legally-mandated Know Your Customer (KYC) process.
                                Once you have specified the number of units you wish to purchase and signed the sales contract, you will be given wiring instructions.
                                Once your wire is received, you will be notified that your units have been transferred to your account, which will be visible to you in the portal.</p>
                            <br /><br />

                            <h4>How do I receive my dividends?</h4>
                            <p>Once you have purchased units, you will be prompted to complete your profile on the portal, which will require your bank's wire instructions.
                                Your wire coordinates will be verified by a small wire transfer from BEC Ltd., after which any dividends payable will be wired directly to that account on the dividend date.</p>
                            <br /><br />

                            <h4>When do I receive dividends? </h4>
                            <p>All dividends will be announced to unit holders by email and on the portal. BEC Ltd. will hold all revenue from the preferred shares in Brillouin Energy Corp. until such time as the amount to be paid to any given account exceeds 100 EUR. </p>
                            <br /><br />

                            <h4>Can I trade my units?</h4>
                            <p>Yes. BEC Ltd. will provide unit holders with the ability to buy and sell their units through the portal. </p><br /><br />
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="container" id="contact">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom_footer  padding">
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 left_footer padding">
                                <p>©2018 BEC Ltd. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default connect(state => ({
}), {})(withCookies(Home));
