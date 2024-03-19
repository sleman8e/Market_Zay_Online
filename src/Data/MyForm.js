import React, { Component } from 'react';
import '../css/MyForm.css'
class MyForm extends Component {
  render() {
    const { label, buttonText, handleChange, handleClick } = this.props;

    return (
      <div style={{textAlign:"center"}}>
        <label className='label'>{label}</label>
        <input className='input' type="text" onChange={handleChange} />
        <button className='button'onClick={handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default MyForm;

