import React, { Component } from "react";

import "./items-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { label: "All", name: "all" },
    { label: "Active", name: "active" },
    { label: "Done", name: "done" },
  ];

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      let classNames = "btn btn-outline-primary";
      let classActive = isActive ? (classNames += " active") : classNames;

      return (
        <button
          type="button"
          class={classActive}
          key={name}
          onClick={() => this.props.onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="col-2 item-status-filter d-flex justify-content-end">
        <div className="btn-group">{buttons}</div>
      </div>
    );
  }
}
