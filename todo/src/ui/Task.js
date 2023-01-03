import style from "./StyleSheets/Task.module.css";
import styled from "styled-components";

function Task(props) {
  const Container = styled.section`
    background-color: rgb(218, 92, 92);
    margin: 1rem;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
    border-radius: 3px;
    position: relative;
  `;

  const TaskTitle = styled.p`
    margin-bottom: 2px;
    margin-top:1px;
    font-size: x-large;
    font-weight: 450;
  `;
  const TaskDesc = styled.p`
    margin: 0.2rem;
    font-size: medium;
  `;

  const TaskDetailsContainer = styled.section`
    margin: 0.2rem;
    font-size: x-small;
    display: flex;
    flex-direction: row;
  `;

  const TaskDone = styled.button`
    position: absolute;
    right: 1rem;
    top: 40%;
    border-radius: 5px;
    border: none;
    background-color: rgb(252, 252, 252);
    height: 1.5rem;
    cursor: pointer;
  `;
  const TaskDuration = styled.section`
    margin-right: 0.8rem;
  `;

  return (
    <>
      <Container>
        <div>
          <TaskTitle>{props.taskTitle}</TaskTitle>
        </div>
        <div>
          <TaskDesc>{props.taskDesc}</TaskDesc>
        </div>
        <TaskDetailsContainer>
          <TaskDuration>{props.taskDuration}</TaskDuration>
          <TaskDuration>{props.taskTime}</TaskDuration>
        </TaskDetailsContainer>
        <TaskDone> Done</TaskDone>
      </Container>
    </>
  );
}

export default Task;
