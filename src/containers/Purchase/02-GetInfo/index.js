import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Icon, Select, Input, Checkbox, Tooltip, Radio } from 'antd';
import Swal from 'sweetalert2'
import Wrapper from './styled';
import * as purchaseActions from 'redux/Purchase/actions';
import countryList from 'country-list';

const { Item } = Form;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const checkFormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 21 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 3 },
    },
};

class GetInfo extends React.Component {
    state = {
        loading: false,
        personType: 'UP',

        SSN: '',
        up_accredited: false,

        ue_organization_name: '',
        ue_FEIN: '',
        ue_accredited: false,
        ue_title: '',
        taxExempt: 'yes',
        ue_investor_type: 'self',
        others_amount: '',
        ue_authority: false,
        ue_custodian: false,
        ue_foreign_banks: false,

        ne_organization_name: '',
        ne_jurisdiction: '',
        ne_title: '',
        ne_authority: false,
        ne_investor_type: 'self',
        ne_others_amount: '',
        ne_custodian: false,
        ne_foreign_banks: false,

        bank_routing_number: '',
        bank_account_number: '',

        rate: 0.11,
        unit_amount: Math.ceil(50000 / 0.11),
        euro_amount: Math.ceil(50000 / 0.11) * 0.11,
        address: '',
    };

    componentDidMount() {
    }

    continue = e => {
        e.preventDefault();
        const { user } = this.props;
        const {
            personType,

            SSN,
            up_accredited,

            ue_organization_name,
            ue_FEIN,
            ue_accredited,
            ue_title,
            taxExempt,
            ue_investor_type,
            others_amount,
            ue_authority,
            ue_custodian,
            ue_foreign_banks,

            ne_organization_name,
            ne_jurisdiction,
            ne_title,
            ne_authority,
            ne_investor_type,
            ne_others_amount,
            ne_custodian,
            ne_foreign_banks,

            unit_amount,
            euro_amount,
            rate,
            address
        } = this.state;

        if (personType === 'UP') {
            //            if (SSN && SSN.length === 11) {
            if (SSN && SSN.length === 11 && up_accredited) {
                user.info = {
                    personType,
                    SSN,
                    up_accredited,
                }
            } else {
                if (!SSN) {
                    Swal({
                        title: 'Error!',
                        text: 'Social Security Number is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (SSN.length !== 11) {
                    Swal({
                        title: 'Error!',
                        text: 'Social Security Number Format is not correct!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!up_accredited) {
                    Swal({
                        title: 'Error!',
                        text: 'This opportunity is only available to US accredited investors. If you are an accredited investor, please check the box in the form. If you are not, please come back later for more opportunities.',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
            }
        } else if (personType === 'UE') {
            if (ue_organization_name && ue_FEIN && ue_FEIN.length === 10 && ue_title && ue_accredited && ue_authority && (ue_investor_type === 'self' || (ue_investor_type === 'others' && others_amount))) {
                user.info = {
                    personType,
                    ue_organization_name,
                    ue_FEIN,
                    ue_accredited,
                    ue_title,
                    taxExempt,
                    ue_investor_type,
                    others_amount,
                    ue_authority,
                    ue_custodian,
                    ue_foreign_banks
                }
            } else {
                if (!ue_organization_name) {
                    Swal({
                        title: 'Error!',
                        text: 'Organization name is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ue_FEIN) {
                    Swal({
                        title: 'Error!',
                        text: 'FEIN is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (ue_FEIN.length !== 10) {
                    Swal({
                        title: 'Error!',
                        text: 'FEIN Format is not correct!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ue_accredited) {
                    Swal({
                        title: 'Error!',
                        text: 'This opportunity is only available to US accredited investors. If you are an accredited investor, please check the box in the form. If you are not, please come back later for more opportunities.',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ue_authority) {
                    Swal({
                        title: 'Error!',
                        text: 'You must be the signing authority to move forward with this purchase.',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ue_title) {
                    Swal({
                        title: 'Error!',
                        text: 'Title is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (ue_investor_type === 'others' && !others_amount) {
                    Swal({
                        title: 'Error!',
                        text: 'Others amount is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
            }

        } else if (personType === 'NE') {
            if (ne_organization_name && ne_jurisdiction && ne_title && ne_authority && (ne_investor_type === 'self' || (ne_investor_type === 'others' && ne_others_amount))) {
                user.info = {
                    personType,
                    ne_organization_name,
                    ne_jurisdiction,
                    ne_title,
                    ne_authority,
                    ne_investor_type,
                    ne_others_amount,
                    ne_custodian,
                    ne_foreign_banks
                }
            } else {
                if (!ne_organization_name) {
                    Swal({
                        title: 'Error!',
                        text: 'Organization name is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ne_jurisdiction) {
                    Swal({
                        title: 'Error!',
                        text: 'Jurisdiction is a required field!',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ne_title) {
                    Swal({
                        title: 'Error!',
                        text: "Title is a required field!",
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (!ne_authority) {
                    Swal({
                        title: 'Error!',
                        text: 'You must be the signing authority to move forward with this purchase.',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                    return;
                }
                if (ne_investor_type === 'others' && !ne_others_amount) {

                }
            }
        } else if (personType === 'NP') {
            user.info = {
                personType
            }
        }
        if (unit_amount && euro_amount && rate && address) {
            user.status = "infoDone";
            user.info = {
                unit_amount,
                euro_amount,
                rate,
                address,
                ...user.info
            }
            if (euro_amount < 50000) {
                Swal({
                    title: 'Error!',
                    text: 'Minimum Euro amount is 50,000!',
                    type: 'error',
                    confirmButtonText: 'Ok'
                })
                return;
            }
        } else {
            if (!unit_amount || !euro_amount) {
                Swal({
                    title: 'Error!',
                    text: 'Amount is a required field!',
                    type: 'error',
                    confirmButtonText: 'Ok'
                })
                return;
            }
            if (!address) {
                Swal({
                    title: 'Error!',
                    text: 'Address is a required field!',
                    type: 'error',
                    confirmButtonText: 'Ok'
                })
                return;
            }
        }
        //       this.props.setUser(user);
        this.props.createEnv(user);
        this.props.changeStep();
    }

    goBack = () => {
        const { user } = this.props;
        user.status = "tosOk";
        this.props.setUser(user);
        this.props.changeStep();
    }

    eurosBlur = field => e => {
        let euros = e.target.value;
        if (!isNaN(Number(euros))) {
            let units = Math.ceil(euros / this.state.rate);
            euros = units * this.state.rate;
            this.setState({
                unit_amount: units,
                euro_amount: euros,
            })
        }
    }

    handleFormInputChange = field => e => {
        let value;
        if (field === 'personType' || field === 'ne_jurisdiction') {
            value = e;
        } else if (field === 'up_accredited' || field === 'ue_accredited' || field === 'ue_authority' || field === 'ne_authority' || field === 'ue_custodian' || field === 'ne_custodian') {
            value = e.target.checked;
        } else if (field === 'unit_amount') {
            let units = e.target.value;
            if (!isNaN(Number(units))) {
                units = Math.ceil(units);
                let euros = units * this.state.rate;
                this.setState({
                    euro_amount: euros,
                    unit_amount: units,
                })
            }
            return;
        } else if (field === 'ue_foreign_banks' || field === 'ne_foreign_banks') {
            value = e.target.checked;
            if (value) {
                Swal({
                    title: 'Warning!',
                    text: 'BEC Ltd. Investor Relations will contact you via email within 36 hours AFTER YOU SIGN THE AGREEMENT because your investor structure requires our compliance department to manually verify your eligibility to participate in the BSD Fund. ',
                    type: 'warning',
                    confirmButtonText: 'Ok'
                })
            }
        } else if (field === 'SSN') {

            value = e.target.value;
            value = value.replace(/-/g, '');
            if (!isNaN(value)) {
                if (value.length <= 3) {
                    // value = value;
                } else if (value.length > 3 && value.length < 6) {
                    value = [value.slice(0, 3), '-', value.slice(3)].join('');
                } else if (value.length >= 6 && value.length <= 9) {
                    value = [value.slice(0, 3), '-', value.slice(3)].join('');
                    value = [value.slice(0, 6), '-', value.slice(6)].join('');
                } else {
                    return;
                }
            } else {
                return;
            }

        } else if (field === 'ue_FEIN') {

            value = e.target.value;
            value = value.replace(/-/g, '');
            if (!isNaN(value)) {
                if (value.length <= 2) {
                    // value = value;
                } else if (value.length > 2 && value.length <= 9) {
                    value = [value.slice(0, 2), '-', value.slice(2)].join('');
                } else {
                    return;
                }
            } else {
                return;
            }

        } else {
            value = e.target.value
        }
        this.setState({
            [field]: value
        })
    }

    renderInput = personType => {
        if (personType === 'UP') {
            return (
                <div>
                    <Item label="Social Security Number" {...formItemLayout}>
                        <Input value={this.state.SSN} onChange={this.handleFormInputChange('SSN')} />
                    </Item>
                    <Item label="I am an accredited investor" {...formItemLayout}>
                        <Checkbox checked={this.state.up_accredited} onChange={this.handleFormInputChange('up_accredited')}></Checkbox>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.investopedia.com/terms/a/accreditedinvestor.aspv" style={{ marginLeft: '30px' }}>
                            <Icon type="question-circle" className="question-icon" />
                        </a>
                    </Item>
                </div>

            )
        } else if (personType === 'UE') {
            return (
                <div>
                    <Item label="Organization name" {...formItemLayout}>
                        <Input value={this.state.ue_organization_name} onChange={this.handleFormInputChange('ue_organization_name')} />
                    </Item>
                    <Item label="FEIN" {...formItemLayout}>
                        <Input value={this.state.ue_FEIN} onChange={this.handleFormInputChange('ue_FEIN')} />
                    </Item>
                    <Item label="Is the organization an accredited investor?" {...checkFormItemLayout}>
                        <Checkbox checked={this.state.ue_accredited} onChange={this.handleFormInputChange('ue_accredited')}></Checkbox>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.investopedia.com/terms/a/accreditedinvestor.aspv" style={{ marginLeft: '30px' }}>
                            <Icon type="question-circle" className="question-icon" />
                        </a>
                    </Item>
                    <Item label="Do you have the signing authority for the purposes of investment?" {...checkFormItemLayout}>
                        <Checkbox checked={this.state.ue_authority} onChange={this.handleFormInputChange('ue_authority')}></Checkbox>
                    </Item>
                    <Item label="Your title in the organization" {...formItemLayout}>
                        <Input onChange={this.handleFormInputChange('ue_title')} />
                    </Item>
                    <Item label="Is the organization 501 tax-exempt?" {...formItemLayout}>
                        <RadioGroup onChange={this.handleFormInputChange('taxExempt')} value={this.state.taxExempt}>
                            <Radio value={'yes'}>Yes</Radio>
                            <Radio value={'no'}>No</Radio>
                        </RadioGroup>
                    </Item>
                    <Item label="Who are you investing for?" {...formItemLayout}>
                        <RadioGroup onChange={this.handleFormInputChange('ue_investor_type')} value={this.state.ue_investor_type}>
                            <Radio value={'self'}>Self</Radio>
                            <Radio value={'others'}>Others</Radio>
                        </RadioGroup>
                    </Item>
                    {this.state.ue_investor_type === 'others' &&
                        <Item label="How many others?" {...formItemLayout}>
                            <Input value={this.state.others_amount} onChange={this.handleFormInputChange('others_amount')} />
                        </Item>
                    }
                    {this.state.ue_investor_type === 'self' &&
                        <Item label="Is the organization investing through a custodian?" {...checkFormItemLayout}>
                            <Checkbox onChange={this.handleFormInputChange('ue_custodian')}></Checkbox>
                        </Item>
                    }
                    <div className="foreign-container ">
                        <div style={{ color: 'white', marginBottom: '20px', width: '90%' }}>Are you, the custodian(if any), and/or, if the investor is a nominee, any benefial owner a "foreign bank"?</div>
                        <Checkbox onChange={this.handleFormInputChange('ue_foreign_banks')} className="foreign-check"></Checkbox>
                    </div>
                </div>
            )
        } else if (personType === 'NE') {
            return (
                <div>
                    <Item label="Organization name" {...formItemLayout}>
                        <Input value={this.state.ne_organization_name} onChange={this.handleFormInputChange('ne_organization_name')} />
                    </Item>
                    <Item label="Organization jurisdiction" {...formItemLayout}>
                        <Select style={{ width: '100%' }} onChange={this.handleFormInputChange('ne_jurisdiction')}>
                            {
                                countryList.getNames().map(country => {
                                    if (country.indexOf("United States") === -1) {
                                        return <Option value={country}>{country}</Option>
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </Select>
                        {/* <Input value={this.state.ne_jurisdiction} onChange={this.handleFormInputChange('ne_jurisdiction')} /> */}
                    </Item>
                    <Item label="Your title in the organization" {...formItemLayout}>
                        <Input value={this.state.ne_title} onChange={this.handleFormInputChange('ne_title')} />
                    </Item>
                    <Item label="Do you have the signing authority for the purposes of investment?" {...checkFormItemLayout}>
                        <Checkbox checked={this.state.ne_authority} onChange={this.handleFormInputChange('ne_authority')}></Checkbox>
                    </Item>
                    <Item label="Who are you investing for?" {...formItemLayout}>
                        <RadioGroup onChange={this.handleFormInputChange('ne_investor_type')} value={this.state.ne_investor_type}>
                            <Radio value={'self'}>Self</Radio>
                            <Radio value={'others'}>Others</Radio>
                        </RadioGroup>
                    </Item>
                    {this.state.ne_investor_type === 'others' &&
                        <Item label="How many others?" {...formItemLayout}>
                            <Input value={this.state.ne_others_amount} onChange={this.handleFormInputChange('ne_others_amount')} />
                        </Item>
                    }
                    {this.state.ne_investor_type === 'self' &&
                        <Item label="Is the organization investing through a custodian?" {...checkFormItemLayout}>
                            <Checkbox onChange={this.handleFormInputChange('ne_custodian')}></Checkbox>
                        </Item>
                    }
                    <div className="foreign-container ">
                        <div style={{ color: 'white', marginBottom: '20px', width: '90%' }}>Are you, the custodian(if any), and/or, if the investor is a nominee, any benefial owner a "foreign bank"?</div>
                        <Checkbox onChange={this.handleFormInputChange('ne_foreign_banks')} className="foreign-check"></Checkbox>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        const { loading, personType } = this.state;

        return (
            <Wrapper className="container">
                <Form className="shadow1">
                    <h1>Information</h1>
                    <div className="info-container">
                        <div className="info-column1">
                            <Item label="Person Type" {...formItemLayout}>
                                <Select defaultValue="UP" style={{ width: '100%' }} onChange={this.handleFormInputChange('personType')}>
                                    <Option value="UP">US Person</Option>
                                    <Option value="UE">US Entity</Option>
                                    <Option value="NP">Non-US Person</Option>
                                    <Option value="NE">Non-US Entity</Option>
                                </Select>
                            </Item>
                            {this.renderInput(personType)}
                        </div>
                        <div className="info-column2">
                            <Item label="Euros" {...formItemLayout} help="Minimum amount is 50,000EUR">
                                <Input value={this.state.euro_amount} onChange={this.handleFormInputChange('euro_amount')} onBlur={this.eurosBlur()} />
                            </Item>
                            <Item label="Units (0.11 euro/unit)" {...formItemLayout}>
                                <Input value={this.state.unit_amount} onChange={this.handleFormInputChange('unit_amount')} />
                            </Item>
                            <div className="total-euros">
                                <hr />
                                <div>Total Euros:</div>
                                <div>
                                    {Number(this.state.euro_amount) + 20}
                                    <Tooltip title="Including 20 EURs that will be returned to you to confirm you banking details">
                                        <Icon type="question-circle" className="question-icon" />
                                    </Tooltip>
                                </div>
                            </div><br /><br />
                            <Item label="Registered Address" {...formItemLayout}>
                                <Input value={this.state.address} onChange={this.handleFormInputChange('address')} />
                            </Item>
                        </div>
                    </div>
                    <Button type="primary" htmlType="submit" loading={loading} onClick={this.continue}>
                        Continue
                    </Button>
                </Form>
            </Wrapper >
        );
    }
}

export default connect(state => ({
    user: state.purchaseReducer.user,
    loading: state.purchaseReducer.loading
}), { ...purchaseActions })(Form.create()(GetInfo));
