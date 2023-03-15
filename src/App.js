import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import style from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import RickAndMortyApi from "./services/RickAndMortyApi";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const api = new RickAndMortyApi({});

function App() {
  return (
    <div className={style.wrapper}>
      <Suspense fallback={<div>Suspense fallback</div>}>
        <Routes>
          <Route path="/" element={<HomePage api={api} />}></Route>
          <Route path="/:id" element={<CharacterPage api={api} />}></Route>
          <Route path="/login" element={<div>login page</div>}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
