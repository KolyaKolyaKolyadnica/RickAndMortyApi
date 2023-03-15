import { Link, useSearchParams } from "react-router-dom";
import style from "./Pagination.module.scss";

function Pagination({ maxPage, query, setStatus }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) ? searchParams.get("page") : 1;

  return (
    <ul className={style.container}>
      <li>
        <Link
          to={`/?page=1&query=${query}`}
          className={`${style.link} ${style.first}`}
          onClick={setStatus}
          preventScrollReset={true}
        >
          <span className={style.arrow}>«</span>
        </Link>
      </li>

      <li>
        {Number(page) - 2 >= 1 ? (
          <Link
            to={`/?page=${Number(page) - 2}&query=${query}`}
            className={style.link}
            onClick={setStatus}
            preventScrollReset={true}
          >
            {Number(page) - 2}
          </Link>
        ) : (
          <div className={style.empty}></div>
        )}
      </li>

      <li>
        {Number(page) - 1 >= 1 ? (
          <Link
            to={`/?page=${Number(page) - 1}&query=${query}`}
            className={`${style.link} ${style.left}`}
            onClick={setStatus}
            preventScrollReset={true}
          >
            {Number(page) - 1}
          </Link>
        ) : (
          <div className={style.empty}></div>
        )}
      </li>

      <li>
        <Link
          to={`/?page=${Number(page)}&query=${query}`}
          className={`${style.link} ${style.current}`}
          onClick={setStatus}
          preventScrollReset={true}
        >
          {Number(page)}
        </Link>
      </li>

      <li>
        {Number(page) + 1 <= maxPage ? (
          <Link
            to={`/?page=${Number(page) + 1}&query=${query}`}
            className={`${style.link} ${style.right}`}
            onClick={setStatus}
            preventScrollReset={true}
          >
            {Number(page) + 1}
          </Link>
        ) : (
          <div className={style.empty}></div>
        )}
      </li>

      <li>
        {Number(page) + 2 <= maxPage ? (
          <Link
            to={`/?page=${Number(page) + 2}&query=${query}`}
            className={style.link}
            onClick={setStatus}
            preventScrollReset={true}
          >
            {Number(page) + 2}
          </Link>
        ) : (
          <div className={style.empty}></div>
        )}
      </li>

      <li>
        <Link
          to={`/?page=${maxPage}&query=${query}`}
          className={`${style.link} ${style.last}`}
          onClick={setStatus}
          preventScrollReset={true}
        >
          <span className={style.arrow}>»</span>
        </Link>
      </li>
    </ul>
  );
}
export default Pagination;
