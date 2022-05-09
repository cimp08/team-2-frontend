import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderInput(name, label, type = "text", required = true) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        required={required}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderSubmitBtn(name) {
    return <button type="submit">{name}</button>;
  }
}

export default Form;
