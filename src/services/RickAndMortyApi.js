class RickAndMortyApi {
  constructor() {
    this.URL = `https://rickandmortyapi.com/api`;
    this.maxPages = 1;
  }

  getMaxPagesNumber() {
    return this.maxPages;
  }

  setMaxPagesNumber(value) {
    return (this.maxPages = value);
  }

  async getCharacters(page) {
    try {
      const response = await fetch(`${this.URL}/character/?page=${page}`);
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  }

  async getCharactersById(id) {
    try {
      const response = await fetch(`${this.URL}/character/${id}`);
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  }

  async getCharactersByName(page, name) {
    try {
      const response = await fetch(
        `${this.URL}/character/?page=${page}&name=${name}`
      );
      return response.json();
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default RickAndMortyApi;
