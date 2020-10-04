import axios from 'axios';

import CONSTANTS from "../helpers/constants";

const Services = {
  async getPhotos(term) {

    const config = {
      params : { query: term },
      headers: {
        Authorization: CONSTANTS.API_TOKEN
      }
    }

    return await axios.get(CONSTANTS.API_URL, config)
      .then(response => response.data.results);
  }
}

export default Services