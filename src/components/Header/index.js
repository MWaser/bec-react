import React from 'react';
import imgLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default ({ showPrequalify, site }) => {
    return (
        <div className="header" id="link-header">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_header padding">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 logo padding">
                        <Link to={'/' + site + '/home'}><img src={imgLogo} className="img-responsive" alt="" /></Link>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 header_menu  padding">
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
                                            <li className="active"><Link to={'/' + site + '/home#token'}>About</Link></li>
                                            <li><Link to={'/' + site + '/home#faq'}>FAQ</Link></li>
                                            <li><Link to={'/' + site + '/home#team'}>Leadership</Link></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="http://brillouinenergy.com">Brillouin Energy Site</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 contact_check padding">
                        <Link className="contact-btn" to={'/' + site + '/purchase'}>Buy now</Link>
                        {!showPrequalify &&
                            <Link className="contact-btn" to={'/' + site + '/purchase'}>Dashboard</Link>}
                        {showPrequalify &&
                            <Link className="contact-btn" to={'/' + site + '/dashboard'}>Nate</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};
