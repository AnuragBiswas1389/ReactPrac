import style from "./StyleSheets/LoginComponent.module.css";
import SingupStyle from './StyleSheets/Signup.module.css';

function SignupComponent() {
  function submitForm(e) {
    e.preventDefault();
    alert("Singing you in---");
  }

  return (
    <>
      <div className={style["container"]+" "+SingupStyle["container"]}>
        <form onSubmit={submitForm}>
          <p className={style.log}>Singup to continue</p>
          <div className={style.input}>
            <p>Email ID</p>
            <input type="text" placeholder="Email ID"></input>
          </div>
          <div className={style.input}>
            <p>User name</p>
            <input type="text" placeholder="user name"></input>
          </div>
          <div className={style.input}>
            <p>Password</p>
            <input type="text" placeholder="password"></input>
          </div>
          <div className={style.btnContainer}>
            <button action="submit">Ok</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignupComponent