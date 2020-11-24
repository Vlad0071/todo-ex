import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import Header from "../header";
import ItemAddForm from "../item-add-form/item-add-form";
import ItemStatusFilter from "../items-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createItem("Получить диплом"),
      this.createItem("Найти работу"),
      this.createItem("Написать крутое React-приложение"),
    ],
    term: "",
    filter: "all",
  };

  createItem(label) {
    return { label, important: false, done: false, id: this.maxId++ };
  }

  searchIdx(id) {
    return this.state.todoData.findIndex((el) => id === el.id);
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.searchIdx(id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    if (!text) {
      return;
    }
    this.setState(({ todoData }) => {
      const newItem = this.createItem(text);
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.searchIdx(id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.searchIdx(id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.label.toLowerCase().indexOf(term) > -1);
  }

  onChangeSearch = (term) => {
    this.setState({ term });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;

      case "active":
        return items.filter((item) => !item.done);

      case "done":
        return items.filter((item) => item.done);

      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    return (
      <div>
        <Header />
        <div className="container">
          <AppHeader done={doneCount} toDo={todoCount} />

          <div className="row mt-3">
            <SearchPanel onChangeSearch={this.onChangeSearch} />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
          />

          <ItemAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
