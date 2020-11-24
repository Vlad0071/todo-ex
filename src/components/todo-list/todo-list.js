import React from "react";
import TodoListItem from "../todo-list-item";

export default function TodoList({
  todos,
  onDeleted,
  onToggleDone,
  onToggleImportant,
}) {
  const elements = todos.map((item) => {
    return (
      <li class="list-group-item ">
        <TodoListItem
          label={item.label}
          important={item.important}
          done={item.done}
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
        />
      </li>
    );
  });

  return <ul class="list-group mt-4">{elements}</ul>;
}
