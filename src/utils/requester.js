const axios = require('axios');

export const requesterGET = (url, params) => {
  return axios
    .get(url, { params })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const requestPOST = (url, bodyParams) => {
  return axios
    .post(url, bodyParams)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};
