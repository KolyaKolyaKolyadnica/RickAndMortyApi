import { Link, useLocation } from "react-router-dom";
import style from "./CharacterItem.module.scss";

function CharacterItem({ character }) {
  const { search } = useLocation();

  return (
    <li className={style.item}>
      <Link to={`/${character.id}`} className={style.link} state={{ search }}>
        <div className={style.imageMask}>
          <img
            src={character.image}
            alt="character-avatar"
            className={style.image}
          />
        </div>
        <div className={style.headline}>
          <div className={style.elementsTitle}>
            <p className={style.name}>{character.name}</p>
            <p className={style.species}>{character.species}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CharacterItem;
