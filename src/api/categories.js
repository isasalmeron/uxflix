import API_URL from '../config/index';

const CATEGORIES_URL = `${API_URL}/categories`;

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const formattedResponse = await response.json();
      return formattedResponse;
    }

    throw new Error('Não foi possível encontrar os dados.');
  });
}

function getAll() {
  return fetch(`${CATEGORIES_URL}`).then(async (response) => {
    if (response.ok) {
      const formattedResponse = await response.json();
      return formattedResponse;
    }

    throw new Error('Não foi possível encontrar os dados.');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
