import API_URL from '../config/index';

const VIDEOS_URL = `${API_URL}/videos`;

function addVideo(video) {
  return fetch(`${VIDEOS_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  }).then(async (response) => {
    if (response.ok) {
      const formattedResponse = await response.json();
      return formattedResponse;
    }

    throw new Error('Não foi possível encontrar os dados.');
  });
}

export default {
  addVideo,
};
