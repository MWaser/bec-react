import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'antd';
import Wrapper from './styled';
import * as purchaseActions from 'redux/Purchase/actions';

class ToS extends React.Component {
    state = { loading: false, welcome: true };

    continue = e => {
        e.preventDefault();
        const { user } = this.props;
        user.status = "tosOk";
        this.props.saveUser(user);
        this.props.changeStep();
    }

    goBack = () => {
        this.props.goToHome();
    }

    render() {
        const { welcome } = this.state;
        const { user } = this.props;
        return (
            <Wrapper className="container">
                {welcome && <Form className="shadow1">
                    <h1>Welcome to the BEC Unit Sale!</h1>
                    <div className="ca-label">
                        Civic provided the following information.  If anything is incorrect, please log out, correct it in your Civic app and log in again.
                    </div>
                    <Card className="term-container">
                        <div>
                            <div className="info-item"><div>Email: </div><div>{user.email}</div></div>
                            <div className="info-item"><div>Name: </div><div>{user.name}</div></div>
                            <div className="info-item"><div>Country: </div><div>{user.country}</div></div>
                        </div>
                    </Card>
                    <div className="btn-container">
                        <Button type="default" className="back-btn" onClick={this.goBack}>
                            Incorrect Information - Log me out
                        </Button>
                        <Button type="primary" onClick={() => { this.setState({ welcome: false }); }}>
                            It all looks good
                        </Button>
                    </div>
                </Form>}
                {!welcome && <Form className="shadow1">
                    <h1>Terms of Service</h1>
                    <div className="ca-label">
                        Please carefully read the Terms of Service below and proceed if you accept them.
                    </div>
                    <Card className="term-container">
                        <p>
                            By signing up for, or using the BEC Ltd. services or any of the services of BEC Ltd. or its affiliates (“BEC Ltd.”) you are agreeing to be bound by the following terms and conditions (“Terms of Service”). Any services offered by BEC Ltd. are referred to in these Terms of Services as the “Services”. Any new features or tools which are added to the current Services shall be also subject to the Terms of Service. BEC Ltd. reserves the right to update and change the Terms of Service by posting updates and changes to the BEC Ltd. website. You are advised to check the Terms of Service from time to time for any updates or changes that may impact you.
                        </p>
                        <p>
                            You must read, agree with and accept all of the terms and conditions contained in this Terms of Service agreement before you may become a BEC Ltd. user.
                        </p>
                        <div>
                            <h4>1. Account Terms</h4>
                            <ol>
                                <li>You must be 18 years or older or at least the age of majority in the jurisdiction where you reside or from which you use this Service.</li>
                                <li>To access and use the Services, you must register for a BEC Ltd. account (“Account”) by providing your full legal name, current address, phone number, a valid email address, and any other information indicated as required. BEC Ltd. may reject your application for an Account, or cancel an existing Account, for any reason, in our sole discretion.</li>
                                <li>You acknowledge that BEC Ltd. will use the email address you provide as the primary method for communication.</li>
                                <li>You are responsible for keeping your password secure. BEC Ltd. cannot and will not be liable for any loss or damage from your failure to maintain the security of your Account and password.</li>
                                <li>You are responsible for all activity and content such as photos, images, videos, graphics, written content, audio files, code, information, or data uploaded, collected, generated, stored, displayed, distributed, transmitted or exhibited on or in connection with your Account (“Materials”).</li>
                                <li>A breach or violation of any term in the Terms of Service, as determined in the sole discretion of BEC Ltd. will result in an immediate termination of your services.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>2. Account Activation</h4>
                            <ol>
                                <li>Subject to section 2.1.2, the person signing up for the Service will be the contracting party (“Account Owner”) for the purposes of our Terms of Service and will be the person who is authorized to use any corresponding account we may provide to the Account Owner in connection with the Service.</li>
                                <li>If you are signing up for the Service on behalf of your employer, your employer shall be the Account Owner. If you are signing up for the Service on behalf of your employer, then you represent and warrant that you have the authority to bind your employer to our Terms of Service.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>3. General Conditions</h4>
                            <p>
                                You must read, agree with and accept all of the terms and conditions contained in these Terms of Service and the Privacy Policy before you may become a member of BEC Ltd..
                            </p>
                            <ol>
                                <li>Technical support is only provided to paying Account holders and is only available via email.</li>
                                <li>The Terms of Service shall be governed by and interpreted in accordance with the laws of the Cayman Islands without regard to principles of conflicts of laws. The parties irrevocably and unconditionally submit to the exclusive jurisdiction of the courts of the Cayman Islands with respect to any dispute or claim arising out of or in connection with the Terms of Service.</li>
                                <li>You acknowledge and agree that BEC Ltd. may amend these Terms of Service at any time by posting the relevant amended and restated Terms of Service on BEC Ltd.’s website and such amendments to the Terms of Service are effective as of the date of posting. Your continued use of the Services after the amended Terms of Service are posted to BEC Ltd.’s website constitutes your agreement to, and acceptance of, the amended Terms of Service. If you do not agree to any changes to the Terms of Service, do not continue to use the Service.</li>
                                <li>
                                    You may not use the BEC Ltd. service for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws), the laws applicable to you in your customer’s jurisdiction, or the laws of the Cayman Islands. You will comply with all applicable laws, rules and regulations in your use of the Service.
                                </li>
                                <li>
                                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by BEC Ltd.
                                </li>
                                <li>
                                    You shall not purchase search engine or other pay per click keywords (such as Google AdWords), or domain names that use BEC Ltd. or BEC Ltd. trademarks and/or variations and misspellings thereof.
                                </li>
                                <li>
                                    Questions about the Terms of Service should be sent to <a href="mailto:support@bec.ltd" target="_top">support@bec.ltd</a>.
                                </li>
                                <li>
                                    You understand that your Materials (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit Card information is always encrypted during transfer over networks.
                                </li>
                                <li>
                                    You acknowledge and agree that your use of the Service, including information transmitted to or stored by BEC Ltd., is governed by its privacy policy.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h4>4. BEC Ltd. Rights</h4>
                            <ol>
                                <li>We reserve the right to modify or terminate the Service for any reason, without notice at any time.</li>
                                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                                <li>
                                    We may, but have no obligation to, remove Materials and suspend or terminate Accounts if we determine in our sole discretion that the goods or services offered violate these Terms of Service.
                                </li>
                                <li>
                                    Verbal or written abuse of any kind (including threats of abuse or retribution) of any BEC Ltd. customer, employee, member, or officer will result in immediate Account termination.
                                </li>
                                <li>
                                    BEC Ltd. does not pre-screen Materials and it is in our sole discretion to refuse or remove any Materials from the Service.
                                </li>
                                <li>
                                    We reserve the right to provide our services to your competitors and make no promise of exclusivity in any particular market segment. You further acknowledge and agree that BEC Ltd. employees and contractors may also be BEC Ltd. customers/merchants and that they may compete with you, although they may not use your confidential information in doing so.
                                </li>
                                <li>
                                    In the event of a dispute regarding Account ownership, we reserve the right to request documentation to determine or confirm Account ownership. Documentation may include, but is not limited to, a scanned copy of your business license, government issued photo ID, the last four digits of the credit card on file, etc.
                                </li>
                                <li>
                                    BEC Ltd. retains the right to determine, in our sole judgment, rightful Account ownership and transfer an Account to the rightful owner. If we are unable to reasonably determine the rightful Account owner, BEC Ltd. reserves the right to temporarily disable an Account until resolution has been determined between the disputing parties.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h4>5. Limitation of Liability</h4>
                            <ol>
                                <li>You expressly understand and agree that BEC Ltd. shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.</li>
                                <li>In no event shall BEC Ltd. or our suppliers be liable for lost profits or any special, incidental or consequential damages arising out of or in connection with our site, our services or these Terms of Service (however arising including negligence). You agree to indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, partners, officers, directors, agents, employees, and suppliers harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents it incorporates by reference, or your violation of any law or the rights of a third party.</li>
                                <li>Your use of the Service is at your sole risk. The Service is provided on an “as is” and “as available” basis without any warranty or condition, express, implied or statutory.</li>
                                <li>BEC Ltd. does not warrant that the Service will be uninterrupted, timely, secure, or error-free.</li>
                                <li>BEC Ltd. does not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.</li>
                                <li>BEC Ltd. does not warrant that the quality of any products, services, information, or other Materials purchased or obtained by you through the Service will meet your expectations, or that any errors in the Service will be corrected.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>6. Waiver and Complete Agreement</h4>
                            <p>
                                The failure of BEC Ltd. to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. The Terms of Service and the documents it incorporates by reference constitute the entire agreement between you and BEC Ltd. and govern your use of the Service, superseding any prior agreements between you and BEC Ltd. (including, but not limited to, any prior versions of the Terms of Service).
                            </p>
                        </div>
                        <div>
                            <h4>7. Intellectual Property and Customer Content</h4>
                            <ol>
                                <li>We do not claim any intellectual property rights over the Materials you provide to the BEC Ltd. service. All Materials you upload remains yours.</li>
                                <li>We will not disclose your confidential information to third parties (“Your Confidential Information”), except as required in the course of providing our services. Your Confidential Information includes any Materials or information provided by you to us which is not publicly known. Your Confidential Information does not include information that: (a) was in the public domain at the time we received it; (b) comes into the public domain after we received it through no fault of ours; (c) we received from someone other than you without breach of our or their confidentiality obligations; or (d) we are required by law to disclose.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>8. Payment of Fees</h4>
                            <ol>
                                <li>You will pay the Fees applicable to our Services and any other applicable fees, including but not limited to Subscription Fees, Transaction Fees and the Additional Fees; together referred to as the “Fees”.</li>
                                <li>Unless otherwise indicated, all Fees and other charges are in Euros (EUR), and all payments shall be in Euros.</li>
                                <li>Subscription Fees are paid in advance and will be billed in 30 day intervals. Transaction Fees and Additional Fees will be charged from time to time at BEC Ltd.’s discretion. You will be charged on each Billing Date for all outstanding Fees that have not previously been charged. Fees will appear on an invoice, which will be sent to the Account Owner via the email provided. As well, an invoice will appear on the Account page of your BEC Ltd. administration console. Users have approximately two weeks to bring up and settle any billing issues.</li>
                                <li>All Fees are exclusive of applicable federal, provincial, state, local or other governmental sales, goods and services, harmonized or other taxes, fees or charges now in force or enacted in the future (“Taxes”).</li>
                                <li>You are responsible for all applicable Taxes that arise from or as a result of your subscription to or purchase of BEC Ltd.’s products and services. These Taxes are based on the rates applicable to the billing address you provide to us. If you are exempt from payment of such Taxes, you must provide us with evidence of your exemption, which in some jurisdictions includes an original certificate that satisfies applicable legal requirements attesting to tax-exempt status. Tax exemption will only apply from and after the date we receive evidence satisfactory to BEC Ltd. of your exemption. If you are not charged Taxes by BEC Ltd., you are responsible for determining if Taxes are payable, and if so, self-remitting Taxes to the appropriate tax authorities in your jurisdiction.</li>
                                <li>BEC Ltd. does not provide refunds.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>9. Cancellation and Termination</h4>
                            <ol>
                                <li>You may cancel your Account at anytime by emailing <a href="mailto:support@bec.ltd" target="_top">support@bec.ltd</a> and then following the specific instructions indicated to you in BEC Ltd.’s  response.</li>
                                <li>Upon termination of the Services by either party for any reason:
                                    <ol>
                                        <li>BEC Ltd. will cease providing you with the Services and you will no longer be able to access your Account;</li>
                                        <li>unless otherwise provided in the Terms of Service, you will not be entitled to any refunds of any Fees, pro rata or otherwise; and</li>
                                        <li>any outstanding balance owed to BEC Ltd. for your use of the Services through the effective date of such termination will immediately become due and payable in full.</li>
                                    </ol>
                                </li>
                                <li>If at the date of termination of the Service, there are any outstanding Fees owing by you, you will receive one final invoice via email. Once that invoice has been paid in full, you will not be charged again.</li>
                                <li>We reserve the right to modify or terminate the BEC Ltd. Service or your Account for any reason, without notice at any time.</li>
                                <li>Fraud: Without limiting any other remedies, BEC Ltd. may suspend or terminate your Account if we suspect that you (by conviction, settlement, insurance or escrow investigation, or otherwise) have engaged in fraudulent activity in connection with the Site.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>10. Modifications to the Service and Prices</h4>
                            <ol>
                                <li>Prices for using the Services are subject to change upon 30 days’ notice from BEC Ltd. Such notice may be provided at any time by posting the changes to the BEC Ltd. site (bec.ltd) or the administration menu of your BEC Ltd. account via announcement.</li>
                                <li>BEC Ltd. reserves the right at any time, and from time to time, to modify or discontinue, the Service (or any part thereof) with or without notice.</li>
                                <li>BEC Ltd. shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>11. Third Party Services</h4>
                            <ol>
                                <li>In addition to these Terms of Service, you also agree to be bound by the additional service-specific terms applicable to services you purchase from, or that are provided by, BEC Ltd.’s partners or other third parties.</li>
                                <li>BEC Ltd. may from time to time recommend, provide you with access to, or enable third party software, applications (“Apps”), products, services or website links (collectively, “Third Party Services”) for your consideration or use. Such Third Party Services are made available only as a convenience, and your purchase, access or use of any such Third Party Services is solely between you and the applicable third party services provider (“Third Party Provider”). Any use by you of Third Party Services offered through the Services or the website is entirely at your own risk and discretion, and it is your responsibility to read the terms and conditions and/or privacy policies applicable to such Third Party Services before using them. In some instances, BEC Ltd. may receive a revenue share from Third Party Providers that BEC Ltd. recommends to you.</li>
                                <li>We do not provide any warranties with respect to Third Party Services. You acknowledge that BEC Ltd. has no control over Third Party Services and shall not be responsible or liable to anyone for such Third Party Services. The availability of Third Party Services on BEC Ltd.’s websites does not constitute or imply an endorsement, authorization, sponsorship, or affiliation by or with BEC Ltd.. BEC Ltd. does not guarantee the availability of Third Party Services and you acknowledge that BEC Ltd. may disable access to any Third Party Services at any time in its sole discretion and without notice to you. BEC Ltd. is not responsible or liable to anyone for discontinuation or suspension of access to, or disablement of, any Third Party Service. BEC Ltd. strongly recommends that you seek specialist advice before using or relying on Third Party Services, to ensure they will meet your needs. In particular, tax calculators should be used for reference only and not as a substitute for independent tax advice when assessing the correct tax rates you should charge to your customers.</li>
                                <li>If you install or enable a Third Party Service for use with the Services, you grant us permission to allow the applicable Third Party Provider to access your data and to take any other actions as required for the interoperation of the Third Party Service with the Services, and any exchange of data or other interaction between you and the Third Party Provider is solely between you and such Third Party Provider. BEC Ltd. is not responsible for any disclosure, modification or deletion of your data or other Materials, or for any corresponding losses or damages you may suffer, as a result of access by a Third Party Service or a Third Party Provider to your data or other Materials.</li>
                                <li>Under no circumstances shall BEC Ltd. be liable for any direct, indirect, incidental, special, consequential, punitive, extraordinary, exemplary or other damages whatsoever, that result from any Third Party Services or your contractual relationship with any Third Party Provider, including any Expert. These limitations shall apply even if BEC Ltd. has been advised of the possibility of such damages. The foregoing limitations shall apply to the fullest extent permitted by applicable law.</li>
                                <li>You agree to indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, BEC Ltd. partners, officers, directors, agents, employees, and suppliers harmless from any claim or demand, including reasonable attorneys’ fees, arising out of your use of a Third Party Service or your relationship with a Third Party Provider.</li>
                            </ol>
                        </div>
                        <div>
                            <h4>12. Beta Services</h4>
                            <p>From time to time, BEC Ltd. may, in its sole discretion, invite you to use, on a trial basis, pre-release or beta features that are in development and not yet available to all merchants (“Beta Services”). Beta Services may be subject to additional terms and conditions, which BEC Ltd. will provide to you prior to your use of the Beta Services. Such Beta Services and all associated conversations and materials relating thereto will be considered BEC Ltd. Confidential Information and subject to the confidentiality provisions in this agreement. Without limiting the generality of the foregoing, you agree that you will not make any public statements or otherwise disclose your participation in the Beta Services without BEC Ltd.’s prior written consent. BEC Ltd. makes no representations or warranties that the Beta Services will function. BEC Ltd. may discontinue the Beta Services at any time in its sole discretion. BEC Ltd. will have no liability for any harm or damage arising out of or in connection with a Beta Service. The Beta Services may not work in the same way as a final version. BEC Ltd. may change or not release a final or commercial version of a Beta Service in our sole discretion.</p>
                        </div>
                        <div>
                            <h4>13.Confidential Information</h4>
                            <p>
                                During the course of your use of the Services, you may receive information relating to us, or to the Services, that is not known to the general public including information related to our security program and practices (“BEC Ltd. Confidential Information”). You agree that: (a) BEC Ltd. Confidential Information will remain BEC Ltd.’s exclusive property; (b) you will use BEC Ltd. Confidential Information only as is reasonably necessary for your use of or participation in the Services; (c) you will not otherwise disclose BEC Ltd. Confidential Information to any third party, except that you may disclose to your affiliates, employees, subcontractors and agents who, in each case, are subject to confidentiality obligations at least as protective of the BEC Ltd. Confidential Information as those contained in these Terms of Service; and (d) you will take all reasonable measures to protect the BEC Ltd. Confidential Information against any use or disclosure that is not expressly permitted in these Terms of Service.
                            </p>
                        </div>
                        <div>
                            <h4>14. Privacy & Data Protection</h4>
                            <p>
                                BEC Ltd. is firmly committed to protecting the privacy of your personal information and the personal information of your customers. By using the Service, you acknowledge and agree that BEC Ltd.’s collection, usage and disclosure of this personal information is governed by our <a href='BECPrivacyPolicy.pdf'>Privacy Policy</a>.
                            </p>
                        </div><br />
                        <p>
                            Additionally, if: (a) you are established in the European Economic Area (EEA); (b) you provide goods or services to customers in the EEA; or (c) you are otherwise subject to the requirements of the EU General Data Protection Regulation, BEC Ltd.’s collection and use of personal information of any European residents is also subject to our Data Processing Addendum.
                        </p> <br />
                        <p>
                            BEC Ltd. <br /><br />
                            Attn: Chief Security Officer<br /><br />
                            C/O Stuarts Corporate Services, Ltd. <br /><br />
                            P.O. Box 251<br /><br />
                            4th Floor, Cayman Financial Centre<br /><br />
                            36 A Dr Roy Roy’s Drive<br /><br />
                            Grand Cayman KY1-1104<br /><br />
                            Cayman Islands<br /><br />
                        </p>
                    </Card>
                    <div className="btn-container">
                        <Button type="default" className="back-btn" onClick={this.goBack}>
                            I do not accept
                        </Button>
                        <Button type="primary" onClick={this.continue}>
                            I Accept
                        </Button>
                    </div>
                </Form>}
            </Wrapper>
        );
    }
}

export default connect(state => ({
    user: state.purchaseReducer.user,
    loading: state.purchaseReducer.loading
}), {
        ...purchaseActions
    })(Form.create()(ToS));
