import React, { Component } from "react";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onChangeSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onChangeSearch(term.toLowerCase());
  };

  render() {
    return (
      <div className="col-10">
        <input
          class="form-control"
          type="text"
          placeholder="Введите название для поиска"
          value={this.state.term}
          onChange={this.onChangeSearch}
        />
      </div>
    );
  }
}
