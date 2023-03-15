import style from "./CharacterList.module.scss";

import CharacterItem from "../CharacterItem/CharacterItem";

function CharacterList({ characters }) {
  return (
    <ul className={style.listContainer}>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </ul>
  );
}

export default CharacterList;
