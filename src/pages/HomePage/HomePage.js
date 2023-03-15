import React, { useEffect, useState } from "react";

import sortArray from "../../utils/sortArray";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Alert from "../../components/Alert/Alert";
import CharacterList from "../../components/CharacterList/CharacterList";
import SearchInput from "../../components/SearchInput/SearchInput";
import logo from "../../images/logo.png";
import portal from "../../images/portal.png";
import style from "./HomePage.module.scss";

function HomePage({ api }) {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("pending");

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) ? searchParams.get("page") : 1;
  const query = searchParams.get("query") ? searchParams.get("query") : "";

  useEffect(() => {
    async function fetchData(query) {
      const data = !query
        ? await api.getCharacters(page)
        : await api.getCharactersByName(page, query);

      if (data.error) {
        setCharacters(data);
        api.setMaxPagesNumber(1);
        setStatus("rejected");
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        api.setMaxPagesNumber(data.info.pages);
        setCharacters(sortArray(data.results));
        setStatus("fulfilled");
      }
    }

    if (status === "pending") fetchData(searchParams.get("query"));
  }, [status]);

  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logo} />
      <SearchInput
        query={query}
        setSearchParams={setSearchParams}
        setStatus={() => setStatus("pending")}
      />

      {status === "fulfilled" && (
        <>
          <CharacterList characters={characters} />
          {api.getMaxPagesNumber() > 1 && (
            <Pagination
              maxPage={api.getMaxPagesNumber()}
              query={query}
              setStatus={() => setStatus("pending")}
            />
          )}
        </>
      )}

      {status === "pending" && (
        <img src={portal} alt="portal-spiner" className={style.spiner} />
      )}

      {status === "rejected" && <Alert error={characters.error} />}
    </div>
  );
}

export default HomePage;
