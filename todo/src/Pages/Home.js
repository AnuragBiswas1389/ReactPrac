import Nav from './Nav';
import Task from '../Ui/Task';
import style from './StyleSheets/Home.module.css'

function Home(){
    return (
      <>
        <Nav></Nav>
        <div className={style.title}></div>
        <div className={style.taskContainer}>
          <Task
            taskTitle="DSA"
            taskDesc="Complete arrays"
            taskDuration="1hr"
            taskTime="6.30pm - 7.30pm"
            taskCompleated="false"
          ></Task>
          <Task
            taskTitle="Development"
            taskDesc="complete scraper"
            taskDuration="1hr"
            taskTime="6.30pm - 7.30pm"
            taskCompleated="false"
          ></Task>
        </div>
      </>
    );
}

export default Home;