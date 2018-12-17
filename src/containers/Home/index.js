/* eslint-disable */
import React from 'react';
import './style.css';

import imgLogo from '../../assets/logo.png';
import titleLine from '../../assets/title-line.png';
import teamImg1 from '../../assets/team-img-1.png';
import teamImg2 from '../../assets/team-img-2.png';
import teamImg4 from '../../assets/team-img-4.png';
import teamImg5 from '../../assets/team-img-5.png';
import teamImg6 from '../../assets/marco.png';
import teamImg7 from '../../assets/shar.png';
import davidNiebauer from '../../assets/David_Niebauer.jpg';
import img2009 from '../../assets/2009-img.png';
import img2020 from '../../assets/2020-img.png';
import img2022 from '../../assets/2022-img.png';
import socialIcon1 from '../../assets/social-icon-1.png';
import socialIcon2 from '../../assets/social-icon-2.png';
import chartImg from '../../assets/projection.svg';

import api from 'utils/api';

class Home extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        amount: '',
        contacted: false,
        loading: false
    }

    onFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        });
    }

    onLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    }

    onEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    onAmountChange = event => {
        this.setState({
            amount: event.target.value
        });
    }

    submitForm = () => {
        const { firstName, lastName, email, amount } = this.state;
        if(firstName && lastName && email && amount) {
            this.setState({loading: true});
            api({
                url: `/api/users/`,
                method: 'Post',
                data: { firstName, lastName, email, amount }
            }).then(res=>{
                this.setState({loading: false});
                if(res.data.statusType === 'success') {
                    this.setState({contacted: true}, ()=>{
                        setTimeout(()=>{
                            this.setState({contacted: false})
                        }, 3000);
                    })
                }
            })
        }
    }

    render() {

        return (
            <div className="wapper">

                <div className="header" id="link-header">

                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_header padding">

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 logo padding">
                                <a href="/"><img src={imgLogo} className="img-responsive" alt="" /></a>
                            </div>

                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 header_menu  padding">
                                <div className="menu">
                                    <nav className="navbar">
                                        <div className="container-fluid">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                </button>

                                            </div>
                                            <div className="collapse navbar-collapse" id="myNavbar">
                                                <ul className="nav navbar-nav">
                                                    <li className="active"><a href="#about">About</a></li>
                                                    <li><a href="#team">Team</a></li>
                                                    <li><a href="#faq">FAQ</a></li>
                                                    <li><a href="#token">The Fund</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 contact_check padding">
                                <a className="contact-btn" href="#contact">Pre-qualify now</a>
                                <button id="signupButton" className="civic-button-a medium" type="button">
                                  <span>Pre-qualify with Civic</span>
                                </button>                                
                            </div>
                        </div>
                    </div>

                </div>



                <div className="slider">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main_slider padding">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 white_left padding">
                                <a className="white-btn" href="#token">Fund Details</a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 yellow-right padding">
                                <a target="_blank" rel="noopener noreferrer"  className="white-btn" href="http://brillouinenergy.com">Visit Brillouin Energy Site</a>
                            </div>

                            <div className="slider_content">
                                <h1>WELCOME TO BEC LTD.</h1>
                                <p>FUNDING THE EVOLUTION OF CLEAN, LOW COST, <br />RENEWABLE ENERGY</p>
                            </div>
                        </div>
                    </div>


                </div>





                <div className="main_body" id="link-about" >
                    <div className="container" id="about">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 about  padding">

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  about_content  padding">
                                <img src={titleLine} alt="" />
                                <h4>WHAT IS BEC LTD.?</h4>
                                <p>
                                    BEC Ltd. is a not for profit corporation that has secured the exclusive rights to
                                    Brillouin Energy Corp.’s Series D Preferred Share offering and is raising funds
                                    to acquire the shares. Unit holders in the fund will receive dividends under the
                                    terms of the Preferred Share Agreement. <br/><br/>
                                    <a href="#token">Read on to learn more…</a>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 iframe  padding">

                                <iframe title="video" src="https://player.vimeo.com/video/181723082" width="640" height="360" frameBorder="0" webkitallowfullscreen ="true" mozallowfullscreen="true" allowFullScreen></iframe>

                            </div>


                        </div>

                    </div>

                </div>






                <div className="meet-team" id="team">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-hedding text-center padding">
                            <h2>MEET THE BOARD OF DIRECTORS</h2>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-box-part padding" style={{padding: '0 0 100px 90px'}}>
                            {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding"></div> */}
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg1} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert W. George II<br/> Chairman</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Robert W. George II<br/> Chairman</h3>
                                        <p className="show-read-more">Bob has a broad based technical leadership career spanning over 40 years. He has led several companies as a CEO
                                        including Commerce Direct Systems, Inc., Imagineering International, Inc., and Denning Mobile Robotics, Inc., which he successfully took public and managed for over a decade.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg2} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert Godes <br/> Board Member</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3 >Robert Godes <br/> Board Member</h3>
                                        <p className="show-read-more"> <span className="first_data">After 25 years experience as an innovator in identifying and developing various clean <span className="morecontent">technology products, Robert Godes founded Brillouin Energy. He has closely studied and has a deep understanding of applied science,most engineering disciplines, quantum mechanics,general physics, high energy and condensed matter physics, electronics,most engineering disciplines, </span></span><span className="sec_data show-read-more2" > quantum mechanics,general physics, high energy and condensed matter physics, electronics, control systems,programming, and electro chemistry. Mr. Godes holds a B.Sc. in Electrical Engineering from Ohio Northern University.including product design and commercialization, and in providing creative <br/>
                                        <a href="javascript:void(0);" className="prev"> {'<< '}prev</a>
                                        <a href="javascript:void(0);" className="sec_next">next{' >>'}</a></span><span className="hide_data " > solutions for product development, marketing and international licensing and joint ventures. Previously he was CEO of several companies including Commerce Direct Systems, Inc. Napa, CA, Imagineering International, Inc., Nashua, NH and Denning Mobile Robotics, Inc. Wilmington, MA. <br/><a href="javascript:void(0);" className="prev2"> {'<< '}prev</a></span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg6} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Marco Aniballi <br/> Administrator</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Marco Aniballi <br/> Administrator</h3>
                                        <p>
                                        Marco is a veteran entrepreneur, strategist and consultant. He began working with startups in the mid 80s and aside from a 4 year stint at Microsoft Corp, has been working with, for or in startups for nearly 30 years. For BEC Ltd. Marco will act as an initial board member as well as oversee the operations of the Company focussing on making unitholder communications and dividend processing as frictionless as possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-box-part padding" style={{padding: '0 0 100px 90px'}}>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg6} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Marco Aniballi <br/> Administrator</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Marco Aniballi <br/> Administrator</h3>
                                        <p>
                                        Marco is a veteran entrepreneur, strategist and consultant. He began working with startups in the mid 80s and aside from a 4 year stint at Microsoft Corp, has been working with, for or in startups for nearly 30 years. For BEC Ltd. Marco will act as an initial board member as well as oversee the operations of the Company focussing on making unitholder communications and dividend processing as frictionless as possible.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg7} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Shar <br/> Legal Counsel</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Shar <br/> Legal Counsel</h3>
                                        <p className="show-read-more">Shah brings a wealth of institutional knowledge with roles at UBS AG, D.E. Shaw & Co and public service as a regulator at the U.S. Securities and Exchange Commission. Most importantly, he was an early adopter of cryptocurrency and brings a unique perspective in our regulatory discussions and collaborations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                        </div> */}

                    </div>
                </div>

                <div className="faq" id="faq">
                    <div className="faq1" id="faq1" style={{paddingTop: '50px'}}>
                        <div className="container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding">
                                <h2 data-toggle="collapse" data-target="#faq-collapse" id="faq-btn" className="collapsed" style={{cursor: 'pointer'}}>FAQ</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-bottom collapse" id="faq-collapse">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding">
                            <h4>Why did you set up a separate company? </h4>
                            <p>Brillouin Energy Corporation is focused on the development and commercialization of the technology that will revolutionize the energy industry.
                            BEC Ltd. is focused on communicating to unit holders the progress of their investment and distributing the benefits of that investment as they occur. </p>
                            <br/><br/>

                            <h4>Why is BEC Ltd. based in the Cayman Islands?</h4>
                            <p>BEC Ltd. is registered in the Cayman Islands because there is no tax on operations, therefore all revenues go to unit holders.</p><br/><br/>

                            <h4>Why are you limiting the sale to 299 U.S. investors and up to 1,999 total investors? </h4>
                            <p>U.S. Securities law can force BEC Ltd. to be classified as a public company if it has more than 2,000 unit holders or more than 300 US unit holders.  BEC Ltd. would like to avoid being classified as public at this stage.</p>
                            <br/><br/>

                            <h4>How will the fund's initial value be calculated? </h4>
                            <p>The fund's initial value will be calculated as the average price of all units sold times the total number of units in the fund.</p><br/><br/>

                            <h4>How long until I get to 5X return?</h4>
                            <p>We don't know, but here's a projection based on conservative estimates. </p><br/><br/>
                            <img src={chartImg} className="img-responsive" alt="" />
                            <br/><br/>

                            <h4>Do I have to pass KYC to participate?</h4>
                            <p>Yes. </p><br/><br/>



                            <h4>How do I buy my units?</h4>
                            <p>When the sale is open, you will be able to access the point of sale from this website. First you will be asked to complete the KYC process. Once you are verified, you will be notified and you will have a limited time to return to the portal and purchase your units. Once you have specified the number of units you wish to purchase, you will be given wiring instructions and once your wire is received, you will be notified that your units have been transferred to your account, which will be visible to you in the portal.</p>
                            <br/><br/>

                            <h4>How do I receive my dividends?</h4>
                            <p>Once you have purchased units, you will be prompted to complete your profile on the portal, which will require your bank's wire instructions. Your wire coordinates will be verified by a small wire transfer from BEC Ltd., after which any dividends payable will be wired directly to that account on the dividend date.</p>
                            <br/><br/>

                            <h4>When do I receive dividends? </h4>
                            <p>All dividends will be announced to unit holders by email and on the portal. BEC Ltd. will hold all revenue from the preferred shares in Brillouin Energy Corp. until such time as the amount to be paid to any given account exceeds 100 EUR. </p>
                            <br/><br/>

                            <h4>Can I trade my units?</h4>
                            <p>Yes. BEC Ltd. will provide unit holders with the ability to buy and sell their units through the portal. </p><br/><br/>

                            <h4>What if I don't have enough money to buy the minimum amount of units. Am I able to buy in as a group?</h4>
                            <p>Unfortunately, no. While we welcome all manner of investment funds who are diversified, a dedicated pool would be viewed by regulators as additional unit holders, putting BEC Ltd. at risk of being classified as a public company.</p><br/><br/>
                        </div>
                        </div>
                    </div>
                <div className="token" id="token">
                        <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding">
                            <h2>Fund Details</h2>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 token_create padding">
                            <p>There is an opportunity for up to 299 US investors and up to 1,999 total investors to participate in this fund.</p>
                            <ul>
                            <li>Brillouin Energy Corp. will distribute 20% of its net profit to BEC Ltd. until the total
                            distributed profit reaches five times the initial fund value, after which</li>
                            <li>Brillouin Energy Corp. will distribute 10% of its net profit to BEC Ltd. until the total
                            distributed profit reaches ten times the initial fund value, after which</li>
                            <li>Brillouin Energy Corp. will distribute 5% of its net profit to BEC Ltd. in perpetuity</li>
                            </ul>
                            <p>BEC Ltd. will distribute all revenues received from Brillouin Energy Corp. to unit holders equally on a per unit basis.</p>
                        </div>
                        </div>
                </div>

                <div className="footer">


                    <div className="container" id="contact">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding">
                        <div className="contact-box">
                            <div id="reused_form">
                                <h2>Join the Waitlist</h2>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 ">
                                    <div className="contact-description">
                                        <p>
                                            There is an opportunity for up to 299 US investors and up to 1,999 total investors to participate in this fund. Access to the fund will be on a first come, first served basis, beginning soon.
                                        </p>
                                        <p>
                                            The minimum investment in this fund is 24,750 EUR. Register here to get on the waitlist and receive advanced notice when the units in the fund become for sale.
                                        </p>
                                    </div>
                                    {/* <div className="form-group">
                                        <input type="text" name="name" className="contact_input mobile" placeholder="As it appears on government ID" />
                                        <input type="text" name="name" className="contact_input desktop" placeholder="First, middle, and last name as it appears on your government issued photo ID" />
                                    </div> */}
                                    <div className="form-group">
                                        <input type="text" name="firstName" className="contact_input" placeholder="First Name" onChange={this.onFirstNameChange} value={this.state.firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lastName" className="contact_input" placeholder="Last Name" onChange={this.onLastNameChange} value={this.state.lastName}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" className="contact_input" placeholder="E-mail" onChange={this.onEmailChange} value={this.state.email}/>
                                    </div>
                                    <div className="form-group">
                                        <select name="amount" className="contact_input" style={{height: '42px'}} onChange={this.onAmountChange} value={this.state.amount}>
                                            <option value="">What do you plan to contribute to the fund?</option>
                                            <option value="25,000+ EUR">25,000+ EUR</option>
                                            <option value="50,000+ EUR">50,000+ EUR</option>
                                            <option value="100,000+ EUR">100,000+ EUR</option>
                                            <option value="500,000+ EUR">500,000+ EUR</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="send_btn" disabled={this.state.loading} onClick={this.submitForm}>Send</button>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                            </div>
                            <div id="error_message" style={{width:'100%', height:'100%', display:'none', float: 'left', color: '#fff',border: '1px solid', padding: '30px 50px'}}>
                                <h4>
                                    Error
                                </h4>
                                Sorry there was an error sending your form.
                            </div>
                            {this.state.contacted &&
                                <div id="success_message" style={{width:'100%', height:'100%', float: 'left', color: '#fff',border: '1px solid', padding: '30px'}}>
                                    <h2>Thank you for your interest in being a part of the next energy evolution. A representative from BEC Limited will get in touch with you soon!</h2>
                                </div>
                            }
                        </div>
                    </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom_footer  padding">

                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 left_footer padding">
                                <p>©2018 Brillouin Energy. All rights reserved.</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding">
                                <div className="social-part">
                                <ul>
                                <li><a href='/' rel="noopener noreferrer" ><img src={socialIcon1} alt="" /></a></li>
                                <li><a href='/'><img src={socialIcon2} alt="" /></a></li>
                                </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Home;
