import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      done,
      important,
      onToggleDone,
      onToggleImportant,
    } = this.props;

    let classNames = "d-flex justify-content-between todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          important={important}
          done={done}
          className="d-flex align-items-start"
          onClick={onToggleDone}
        >
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm todo-list-item-btn"
            onClick={onToggleImportant}
          >
            <i class="fas fa-star" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm ml-1 todo-list-item-btn"
            onClick={onDeleted}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </span>
    );
  }
}
