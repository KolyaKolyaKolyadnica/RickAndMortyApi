import style from "./CharacterCardSkeleton.module.scss";

function CharacterCard() {
  return (
    <article className={style.characterCard}>
      <div className={style.avatar}></div>

      <h1 className={style.name}> </h1>
      <h2 className={style.info}>Information</h2>

      <ul className={style.list}>
        <li className={style.listItem}>
          <p className={style.listItemKey}>Gender</p>
          <p className={style.listItemValue}></p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Status</p>
          <p className={style.listItemValue}></p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Specie</p>
          <p className={style.listItemValue}></p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Origin</p>
          <p className={style.listItemValue}></p>
          <div className={style.divider}></div>
        </li>

        <li className={style.listItem}>
          <p className={style.listItemKey}>Type</p>
          <p className={style.listItemValue}></p>
          <div className={style.divider}></div>
        </li>
      </ul>
    </article>
  );
}

export default CharacterCard;
