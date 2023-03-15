import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./GoBackBtn.module.scss";

function GoBackBtn() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state !== null && location.state.search !== undefined) {
    return (
      <button
        type="button"
        className={style.container}
        onClick={() => navigate(-1)}
      >
        <span className={style.arrow}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
              fill="black"
            />
          </svg>
        </span>

        <h3 className={style.text}>GO BACK</h3>
      </button>
    );
  }

  return (
    <Link to={"/"} className={style.container}>
      <svg
        className={style.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
          fill="black"
        />
      </svg>

      <p className={style.text}>TO MAIN</p>
    </Link>
  );
}

export default GoBackBtn;
