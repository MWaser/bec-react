import React from 'react';
import { Input, Select } from 'antd';

const Option = Select.Option;
  
class PriceInput extends React.Component {
    static getDerivedStateFromProps(nextProps) {
      // Should be a controlled component.
      if ('value' in nextProps) {
        return {
          ...(nextProps.value || {}),
        };
      }
      return null;
    }
  
    constructor(props) {
      super(props);
  
      const value = props.value || {};
      this.state = {
        number: value.number || 0,
        currency: value.currency || 'eur',
      };
    }
  
    handleNumberChange = (e) => {
      let input = e.target.value;
      let lastCharacter = input[input.length-1];
      let dotCount = (input.match(/\./g) || []).length;
      if(dotCount > 1) {
        return;
      }
      if (Number.isNaN(parseInt(lastCharacter)) && lastCharacter !== '.' && lastCharacter !== undefined) {
        return;
      }
      const number = input;
      if (!('value' in this.props)) {
        this.setState({ number, currency: this.props.currency });
      }
      this.triggerChange({ number, currency: this.props.currency });
    }
  
    handleCurrencyChange = (currency) => {
      if (!('value' in this.props)) {
        this.setState({ currency, number: this.props.number });
      }
      this.triggerChange({ currency, number: this.props.number });
    }
  
    triggerChange = (changedValue) => {
      // Should provide an event to pass value to Form.
      const onChange = this.props.onChange;
      if (onChange) {
        onChange(Object.assign({}, this.state, changedValue));
      }
    }
  
    render() {
      const { size, number, currency } = this.props;
      return (
        <span>
          <Input
            type="text"
            size={size}
            value={number}
            onChange={this.handleNumberChange}
            style={{ width: '65%', marginRight: '3%' }}
          />
          <Select
            value={currency}
            size={size}
            style={{ width: '32%' }}
            onChange={this.handleCurrencyChange}
          >
            <Option value="eur">EUR</Option>
            <Option value="gbp">GBP</Option>
            <Option value="usd">USD</Option>
            <Option value="aud">AUD</Option>
            <Option value="cad">CAD</Option>
            <Option value="sek">SEK</Option>            
          </Select>
        </span>
      );
    }
}

export default PriceInput;