import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="item-add-form mt-4" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              class="form-control "
              type="text"
              placeholder="Введите название дела"
              onChange={this.onLabelChange}
              value={this.state.label}
            />
          </div>
          <div className="col-2 btn-group item-add-form-btn-group">
            <button type="submit" className=" btn btn-outline-primary">
              Добавить
            </button>
          </div>
        </div>
      </form>
    );
  }
}
