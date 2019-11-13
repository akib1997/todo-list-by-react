import React, { Component } from "react";
import TodoItem from "./todoitem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>

          {items.map(q => {
            return (
              <TodoItem
                key={q.id}
                title={q.title}
                handleDelete={() => handleDelete(q.id)}
                handleEdit={() => handleEdit(q.id)}
              />
            );
          })}

          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear list
          </button>
        </ul>
      </div>
    );
  }
}
