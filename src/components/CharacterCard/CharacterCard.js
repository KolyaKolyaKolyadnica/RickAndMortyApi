import style from "./CharacterCard.module.scss";

function CharacterCard({ character }) {
  return (
    <article className={style.characterCard}>
      <img src={character.image} alt="logo" className={style.avatar} />

      <h1 className={style.name}>{character.name}</h1>
      <h2 className={style.info}>Information</h2>

      <ul className={style.list}>
        <li className={style.listItem}>
          <p className={style.listItemKey}>Gender</p>
          <p className={style.listItemValue}>{character.gender}</p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Status</p>
          <p className={style.listItemValue}>{character.status}</p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Specie</p>
          <p className={style.listItemValue}>{character.species}</p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Origin</p>
          <p className={style.listItemValue}>{character.origin.name}</p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Type</p>
          <p className={style.listItemValue}>
            {character.type ? character.type : "Unknown"}
          </p>
          <div className={style.divider}></div>
        </li>
      </ul>
    </article>
  );
}

export default CharacterCard;
