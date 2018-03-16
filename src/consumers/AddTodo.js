import React from "react";
import Context from "../context";

const AddTodo = () => {
  let input;
  return (
    <div>
      <Context.Consumer>
        {context => (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              context.addTodo(input.value);
              input.value = "";
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        )}
      </Context.Consumer>
    </div>
  );
};

export default AddTodo;
