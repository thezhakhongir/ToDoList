import React from "react";
import { useState } from "react";
import ErrorModal from "./ErrorModal";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    margin-bottom: 40px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    & input {
      outline: none;
      border: none;
      border-radius: 7px;
      width: 200%;
      height: 30px;
      padding: 2px 5px;
      background-color: #dadada;
    }
    & h1 {
      color: white;
    }
  }
  & button {
    padding: 10px 80px;
    background: #5ca586;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    font-size: 20px;
    color: white;
  }
`;

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState();
  const todoHandler = (event) => setTodo(event.target.value);
  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todo.trim().length === 0) {
      setError({
        title: "Empty inputs",
        message: "Please, fill all inputs",
      });
      return;
    }
    props.onAddTodo({
      name: todo,
      id: Math.random().toString(),
      isChecked: false,
    });
    setTodo("");
  };
  const closeModal = () => {
    setError(null);
  };
  return (
    <FormDiv>
      {error && <ErrorModal {...error} closeModal={closeModal} />}
      <form onSubmit={addTodoHandler}>
        <div>
          <h1>To Do List</h1>
          <input type="text" onChange={todoHandler} value={todo} />
        </div>
        <button type="submit">Add</button>
      </form>
    </FormDiv>
  );
};

export default TodoForm;
