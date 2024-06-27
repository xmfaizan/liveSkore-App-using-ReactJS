const API_KEY = "a185004e-92c0-4fa2-b39c-8630c0455b5f";

//get alll the upcoming matches
export const getMatches = () => {
  const url =
    "https://api.cricapi.com/v1/currentMatches?apikey=a185004e-92c0-4fa2-b39c-8630c0455b5f&offset=0";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR:", error));
};

//match details

export const getMatchDetail = (id) => {
  const url =
    " https://api.cricapi.com/v1/currentMatches?apikey=a185004e-92c0-4fa2-b39c-8630c0455b5f&offset=0&unique_id=${id} ";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
