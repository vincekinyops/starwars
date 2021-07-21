const axios = require('axios');


const requestStarships = async () => {
  axios.get('https://swapi.dev/api/starships/')
    .then(function (response) {
      // handle success
      // console.log(response.data.results);
      return response.data.results
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default requestStarships