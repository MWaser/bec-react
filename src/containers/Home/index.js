/* eslint-disable */
import React from 'react';
import './style.css';

import imgLogo from '../../assets/logo.png';
import titleLine from '../../assets/title-line.png';
import teamImg1 from '../../assets/team-img-1.png';
import teamImg2 from '../../assets/team-img-2.png';
import teamImg4 from '../../assets/team-img-4.png';
import teamImg5 from '../../assets/team-img-5.png';
import davidNiebauer from '../../assets/David_Niebauer.jpg';
import img2009 from '../../assets/2009-img.png';
import img2020 from '../../assets/2020-img.png';
import img2022 from '../../assets/2022-img.png';
import socialIcon1 from '../../assets/social-icon-1.png';
import socialIcon2 from '../../assets/social-icon-2.png';

class Home extends React.Component {

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
                                                    <li className="active"><a href="#about">ABOUT</a></li>
                                                    <li><a href="#team">TEAM</a></li>
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
                            </div>
                        </div>
                    </div>

                </div>



                <div className="slider"> 
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main_slider padding">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 white_left padding">
                                <a target="_blank" rel="noopener noreferrer" className="white-btn" href="https://bec.foundation/White-Paper.pdf">Fund Details</a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 yellow-right padding">
                                <a target="_blank" rel="noopener noreferrer"  className="white-btn" href="http://brillouinenergy.com">Visit Brillouin Energy Site</a>
                            </div>
                            
                            <div className="slider_content">
                                <h1>WELCOME TO <br/> BEC LTD.</h1>
                                <p>Funding The evolution of Clean,  
                                    Low cost, Renewable energy</p>
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
                                <p>BEC Ltd. has secured the rights to Brillouin Energy Corp.’s Series D preferred shares offering and is raising funds to acquire the shares. Unit holders in the fund will receive dividends under the terms of the preferred.<br/><br/></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 iframe  padding">
                                
                                <iframe title="video" src="https://player.vimeo.com/video/181723082" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                    
                            </div>


                        </div>

                    </div>

                </div>






                <div className="meet-team" id="team">  
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-hedding text-center padding">
                            <h2>MEET THE TEAM</h2>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-box-part padding" style={{padding: '0 0 100px 90px'}}>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg1} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert W. George <br/> II Chief Executive Officer</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>Robert W. George <br/> II Chief Executive Officer</h3>
                                        <p className="show-read-more">Bob has a broad based technical leadership career spanning over 40 years.  He has led several <span className="morecontent">companies as a CEO including Commerce Direct Systems, Inc., Imagineering International, Inc., and Denning Mobile Robotics, Inc., which he successfully took public and managed for over a decade.</span></p>
                                    </div>
                                        
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg2} alt="" className="img-responsive" />
                                    <h3 className="meet_team">Robert Godes <br/> Founder, President and Chief Technology Officer</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3 >Robert Godes <br/> Founder, President and Chief Technology Officer</h3>
                                        <p className="show-read-more"> <span className="first_data">After 25 years experience as an  innovator in identifying and developing various clean <span className="morecontent">technology products, Robert Godes founded Brillouin Energy. He has closely studied and has a deep understanding of applied science,most engineering disciplines, quantum mechanics,general physics, high energy and condensed matter physics, electronics,most engineering disciplines, </span></span><span className="sec_data show-read-more2" > quantum mechanics,general physics, high energy and condensed matter physics, electronics, control systems,programming, and electro chemistry. Mr. Godes holds a B.Sc. in Electrical Engineering from Ohio Northern University.including product design and commercialization, and in providing creative <br/> 
                                        <a href="javascript:void(0);" className="prev"> {'<< '}prev</a>     
                                        <a href="javascript:void(0);" className="sec_next">next{' >>'}</a></span><span className="hide_data " > solutions for product development, marketing and international licensing and joint ventures. Previously he was CEO of several companies including Commerce Direct Systems, Inc. Napa, CA, Imagineering International, Inc., Nashua, NH and Denning Mobile Robotics, Inc. Wilmington, MA. <br/><a href="javascript:void(0);" className="prev2"> {'<< '}prev</a></span></p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={davidNiebauer} alt="" className="img-responsive" />
                                    <h3 className="meet_team">David Niebauer <br/> VP, Business Development & General Counsel</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>David Niebauer <br/> VP, Business Development & General Counsel</h3>
                                        <p className="show-read-more">Mr. Niebauer is a practicing securities law attorney with 25 years senior legal and business <span className="morecontent">development experience in venture capital finance, M&A and general corporate representation.David has extensive experience representing clean-technology ventures at all stages of growth including contract negotiations, corporate finance, intellectual property strategy, licensing and executive management.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 meet-team-box-part padding" style={{padding: '0 0 100px 90px'}}>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg4} alt="" className="img-responsive" />
                                    <h3 className="meet_team">David Firshein <br/> Chief Financial Officer</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>David Firshein <br/> Chief Financial Officer</h3>
                                        <p className="show-read-more">Mr. Firshein has over 30 years of senior corporate finance, investment banking, and venture <span className="morecontent">management experience.  He has directly completed over $900 million of debt and  equity transactions for developing small to large companies including multiple environmentally oriented or cleantech ventures.</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 padding">
                                <div className="meet-team-box hovereffect">
                                    <img src={teamImg5} alt="" className="img-responsive" />
                                    <h3 className="meet_team">David Correia <br/> Mechanical Engineering Manager</h3>
                                    <div className="meet-team-box-text overlay">
                                        <h3>David Correia <br/> Mechanical Engineering Manager</h3>
                                    <p className="show-read-more">Mr. Correia brings over 30 years experience developing new process equipment and <span className="morecontent">mechanical designs that use chemical reactions to complete process steps for manufacturing. He is highly skilled in troubleshooting chemical and mechanical systems, and bringing those solutions to market.</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 board-members text-center padding">

                            <h3>Technical and Business Advisory Board Members</h3>

                            <span>Yifo Guo</span>
                            <p>A renown design engineer of innovative solutions for rapidly growing markets, Roger
                            Fuller isco-founder and the senior scientist at Maxim Integrated Products (MXIM) where he was instrumental in designing MAX 1780 smart and flash memory battery chips.</p>

                            <span>Roger W. Fuller</span>
                            <p>A renown design engineer of innovative solutions for rapidly growing markets, Roger
                                Fuller isco-founder and the senior scientist at Maxim Integrated Products (MXIM) where he was instrumental in designing MAX 1780 smart and flash memory battery chips.</p>

                            <span>Robert Clear</span>
                            <p>Mr. Clear holds a PhD Chemistry UCSD, and serves as a guest lecturer at Cal Poly and
                            staff scientist for Lawrence Berkeley Labs in Applied Science Division. He is the authorand co-author of thirty publications on energy issues and lighting.</p>

                            <span>Dr. Francis Tanzella</span>
                            <p>Dr. Tanzella has helped develop the low energy nuclear reactions
                            (LENR) electrochemical and calorimetry program at SRI, and has been 
                            instrumental in the advancement of the field since its inception.</p>

                            <span>Carl Page</span>
                            <p>Carl Page is currently President of the Anthropocene Institute. He is a highly sought after
                            entrepreneur, an advisor to technology, internet marketing, and emerging cleantech
                            companies,as well as a prominent investor in both hi-tech and cleantech ventures. A
                            highly skilled computer scientist and clean technologist, Mr. Page was a co-founder of
                            E-Groups, which later became Yahoo Groups.</p>


                            <span>Adolfo O. Gutierrez</span>

                            <p>Adolfo Gutierrez holds a PhD Engineering Physics Rensselaer Polytech (RPI), and
                            serves as executive director and co-founder of Southern Pacific Research Institute for
                            Advanced Technologies (SEPARI) in Chile. SEPARI conducts collaborative science and
                            engineering research efforts in Chile and abroad.</p>
                        </div>

                    </div>
                </div> 

                <div className="timeline" id="timeline"> 
                    <div className="container" id="timeline_slider">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bec_glance  padding">
                                <h2>THE BEC TIMELINE</h2>
                            </div>			
                        </div>
                        <div className='row'>
                            <div className='col-md-offset-2 col-md-8'>
                                <div className="carousel slide quote-carousel" data-ride="carousel" id="quote-carousel2">
                                    
                                    <ol className="carousel-indicators">
                                    <li data-target="#quote-carousel2" data-slide-to="0" className="active"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="1"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="2"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="3"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="4"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="5"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="6"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="7"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="8"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="9"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="10"></li>
                                    <li data-target="#quote-carousel2" data-slide-to="11"></li>
                                    
                                    </ol>
                                    
                                    <div className="carousel-inner sliderDiv">
                                    
                                    <div className="item active">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src={img2009} alt="" />                      
                                                <p style={{paddingTop: '40px'}}>R. Godes founds Brillouin Energy Corp to further develop the LENR project and transfers all IP to Brillouin Energy</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>MAY/2012</span>
                                            <p>Closes Series A round with $2.5 Million raised. Completes collaboration agreement with SRI </p>									  
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>AUGUST/2012</span>
                                            <p>Brillouin Energy signs long term formal scientific research agreement with SRI International (the first of its kind in the LENR field)</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>OCTOBER/2013</span>
                                            <p>Commencement of Phase III Brillouin Wet Boiler fabrication containing water and electrolyte capable of producing 100K BTU – enough to heat an average size US home </p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>DECEMBER/2013</span>
                                            <p>Commercial sales breakthrough as Brillouin Energy signs its first paid Licensing Agreement for its CECR Technologies</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>							  
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>January/2015</span>
                                            <p>SRI independently reviews and confirms the accuracy of the Brillouin Hydrogen Hot Tube (HHT) System January test results that produced a 4.13X Coefficient</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>JULY/2015</span>
                                            <p>Brillouin Energy selected as one of the AlwaysOn Global 100 Companies to Watch in Silicon Valley </p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>January/2017</span>
                                            <p>Researchers at SRI International issued an Interim Progress Report that states they successfully replicated "over unity" amounts of thermal energy (heat) for Brillouin Energy Corporation's most advanced Isoperibolic ("IPB") Hydrogen Hot Tube™ (HHT™) reactor test systems based on controlled low energy nuclear reactions ("LENR") </p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>March/2018</span>
                                            <p>In their 2017 Report, SRI's researchers confirmed that they have continued to successfully replicate "over-unity" amounts of thermal energy (heat) in Brillouin Energy's IPB HHTs, now at materially greater output levels than was seen in their prior replication efforts that were documented in their 2016 Report. SRI conducted extensive review and third-party tests of Brillouin Energy's technology throughout 2017. This included review of considerable test data from Brillouin's four individual IPB HHT™ LENR reactor test systems, plus 34 different HHT™ reactor cores that were designed to increase scaling of power outputs and reactor control </p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <br/><br/><br/>
                                            <span>2018</span>
                                            <p>Q4 – BEC Token ICO Launch</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <img src={img2020} alt="" />
                                            <p style={{paddingTop: '40px'}}>BEC introduces<br/> commercial prototype<br/> design</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    <div className="item">
                                        <blockquote>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <img src={img2022} alt="" />
                                            <p style={{paddingTop: '40px'}}>BEC licenses first<br/> commercial prototype<br/> design for distribution.</p>
                                            </div>
                                        </div>
                                        </blockquote>
                                    </div>
                                    
                                    </div><br/>
                
                                    <a data-slide="prev" href="#quote-carousel2" className="sliderarrow left carousel-control"><i className="fa fa-angle-left"></i></a>
                                    <a data-slide="next" href="#quote-carousel2" className="sliderarrow right carousel-control"><i className="fa fa-angle-right"></i></a>
                                </div>                          
                            </div>
                        </div>
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
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sold_token  padding">
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 Tranche_token ">
                                        <div className="token-box">
                                            <h3>Total Units in Fund: </h3>
                                            <span>1B</span><br/><br/>
                                            <h3>Total Units to be Sold: </h3>
                                            <span>900M</span>
                                        </div>
                                        <div className="token-box">
                                            <h3>Unit Price: </h3>
                                            <span>0.12 USD</span>
                                            <span>450MM</span>-->
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 future_use  padding">
                                        <div className="token-box right">
                                            <h3>Units Reserved for Operations:</h3><br/><br/>
                                            <span>100M</span>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 purchase_token  padding">						
                                    <p>With the fund's proceeds, BEC Ltd. will purchase from Brillouin Energy Corp. a dedicated class of preferred stock established in its charter, with the following terms.</p>
                                    <ul>
                                    <li>Brillouin Energy Corp. will distribute 20% of its net profit to BEC Ltd. until the total distributed profit reaches five times the initial fund value, after which</li>
                                    <li>Brillouin Energy Corp. will distribute 10% of its net profit to BEC Ltd. until the total distributed profit reaches ten times the initial fund value, after which</li>
                                    <li>Brillouin Energy Corp. will distribute 10% of its net profit to BEC Ltd. in perpetuity </li>
                                    </ul>
                                    <p>BEC Ltd. will distribute all revenues received from Brillouin Energy Corp. to unit holders on a per unit basis equally. </p>
                                </div>
                                
                        </div>
                        </div>
                </div>

                <div className="footer">

                    
                    <div className="container" id="contact">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding">
                        <div className="contact-box">
                            <form id="reused_form">
                                <h2>Join the Waitlist</h2>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                                
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 ">
                                    <div className="form-group">
                                        <input type="text" name="name" className="contact_input" placeholder="First, middle, and last name as it appears on your government issued photo ID" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" className="contact_input" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="send_btn">Send</button>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 padding"></div>
                            </form>
                            <div id="error_message" style={{width:'100%', height:'100%', display:'none', float: 'left', color: '#fff',border: '1px solid', padding: '30px 50px'}}>
                                <h4>
                                    Error
                                </h4>
                                Sorry there was an error sending your form. 
                            </div>
                            <div id="success_message" style={{width:'100%', height:'100%', display:'none', float: 'left', color: '#fff',border: '1px solid', padding: '30px 50px'}}>
                                <h2>Success! Your Message was Sent Successfully.</h2>
                            </div>
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
