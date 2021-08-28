const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

const character = 'character';

const getResource = async (url) => {
  try {
    const response = await instance.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log('errors');
    }
  } catch (error) {
    console.error('error: ----', error);
  }
};

// =================================================================

const transformCharacter = (character) => {
  const { id, name, gender, image, species, type } = character;
  const price = 100;
  return { id, name, gender, image, species, type, price };
};

const getAllBooks = async () => {
  const res = await getResource(`/${character}`);
  return res.results.map((item) => transformCharacter(item));
};

const getBook = async (id) => {
  const res = await await getResource(`/${character}/${id}`);
  return transformCharacter(res);
};

export { getAllBooks, getBook };
