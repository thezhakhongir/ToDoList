import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: coral;
  border-radius: 8px;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const onAddTodoHandler = (newTodo) => {
    setTodoList((prevList) => {
      return [...prevList, newTodo];
    });
  };
  const deleteTodoHandler = (id) => {
    return () => {
      const deleteTodo = todoList.filter((item) => item.id !== id);
      setTodoList(deleteTodo);
    };
  };
  const error = {
    title: "Empty input",
    message: "Fill all inputs",
  };
  const isCheckedHandler = (id) => {
    return () => {
      const updatedTodoList = todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      });
      setTodoList(updatedTodoList);
    };
  };
  return (
    <Wrapper>
      <TodoForm onAddTodo={onAddTodoHandler} />
      <TodoList
        todoList={todoList}
        onDeleteTodo={deleteTodoHandler}
        isCheckedHandler={isCheckedHandler}
      />
    </Wrapper>
  );
};

export default App;
