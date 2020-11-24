import React from "react";

export default function AppHeader({ toDo, done }) {
  return (
    <div className="row">
      <div className="col-6 mt-2 d-flex justify-content-start">
        <h className="h2 font-weight-normal">Мой список дел</h>
      </div>
      <span className="col-6 lead mt-4 d-flex justify-content-end">
        {toDo} необходимо сделать, {done} сделано
      </span>
    </div>
  );
}
