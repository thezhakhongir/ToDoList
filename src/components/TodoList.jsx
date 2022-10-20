import styled from "styled-components";

const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  width: 100%;
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 80%;
    font-size: 20px;
    color: white;
    border: 1px solid #5ca586;
    border-radius: 7px;
    background: #5ca586;
    padding: 10px 20px;
    & div {
      display: flex;
      gap: 10px;
    }
    & button {
      color: #5ca586;
      background-color: white;
      border: 2px solid white;
      border-radius: 7px;
      font-size: 20px;
      padding: 6px 10px;
      cursor: pointer;
    }
    & button:hover {
      color: white;
      background-color: coral;
      border: 2px solid white;
    }
  }
`;
const TodoList = ({ todoList, onDeleteTodo, isCheckedHandler }) => {
  return (
    <ToDoList>
      {todoList.map((item) => {
        return (
          <li key={item.id}>
            <div style={{ textDecoration: item.isChecked && "line-through" }}>
              {item.name} is {item.age} years old{" "}
            </div>
            <div>
              <button onClick={onDeleteTodo(item.id)}>Delete</button>
              <input type="checkbox" onChange={isCheckedHandler(item.id)} />
            </div>
          </li>
        );
      })}
    </ToDoList>
  );
};

export default TodoList;
