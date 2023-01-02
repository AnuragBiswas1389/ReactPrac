import style from './StyleSheets/Task.module.css'

function Task(props){
    return (
      <>
        <div className={style.container}>
          <div className={style.taskTitle}>
            <p>{props.taskTitle}</p>
          </div>
          <div className={style.taskDesc}>
            <p>{props.taskDesc}</p>
          </div>
          <div className={style.taskDetails}>
            <div className={style.taskDuration}>{props.taskDuration}</div>
            <div className={style.taskDuration}>{props.taskTime}</div>
          </div>
        </div>
      </>
    );
}

export default Task;