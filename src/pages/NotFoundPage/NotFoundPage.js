import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.scss";
import portal from "../../images/portal.png";

function NotFoundPage() {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Not Found</h1>
        <h2 className={style.subtitle}>Maybe check what's there?&#8628;</h2>
        <Link to="/" className={style.link}>
          <img src={portal} alt="portal-link" className={style.portal} />
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
