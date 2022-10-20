import styled from "styled-components";

const MainDivStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: #8080805a;
  display: flex;
  justify-content: center;
  align-items: center;
  & main {
    width: 400px;
    height: 300px;
    z-index: 100;
    overflow: hidden;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
  }
  & header {
    color: #ff0000;
    font-size: 30px;
  }
  & div {
    color: white;
    font-size: 19px;
  }
  & button {
    padding: 7px 90px;
    background-color: #8b8b8bd6;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  & button:hover {
    background-color: #5ca586;
  }
`;

const ErrorModal = (props) => {
  return (
    <MainDivStyle>
      <main>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={props.closeModal}>OK</button>
        </footer>
      </main>
    </MainDivStyle>
  );
};

export default ErrorModal;
