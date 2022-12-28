import style from "./Card.module.css"

function Card(props) {
  return <>
      <div className={style.card}>
            <div className={style.heading}>{props.heading}</div>
            <div className={style.body}>
               {props.children}
            </div>
      </div>
  </>;
}

export default Card;
