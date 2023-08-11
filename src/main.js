const axios = require('axios');

/** Function to fetch a random insult from evilinsult.com */
const getRandomInsult = async () => {
  const response = await axios.get(
    'https://evilinsult.com/generate_insult.php?lang=en&type=json'
  );
  console.log(response.data.insult);
};

/** Call above function */
getRandomInsult();
