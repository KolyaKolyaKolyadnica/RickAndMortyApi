import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Alert from "../../components/Alert/Alert";
import CharacterCard from "../../components/CharacterCard";
import CharacterCardSkeleton from "../../components/CharacterCardSkeleton";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import style from "./CharacterPage.module.scss";

function CharacterPage({ api }) {
  const [character, setCharacter] = useState(null);
  const [status, setStatus] = useState("idle");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await api.getCharactersById(id);

      if (data.error) {
        setStatus("rejected");
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("fulfilled");
      }

      setCharacter(data);
    }

    setStatus("pending");
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <GoBackBtn />
      {status === "pending" && <CharacterCardSkeleton />}
      {status === "fulfilled" && <CharacterCard character={character} />}
      {status === "rejected" && <Alert error={character.error} />}
    </div>
  );
}

export default CharacterPage;
