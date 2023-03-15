import style from "./Alert.module.scss";

function Alert({ error }) {
  return (
    <div className={style.notFoundText}>
      <p className={style.text}>{error}</p>
      <div className={style.timer}></div>
    </div>
  );
}

export default Alert;
