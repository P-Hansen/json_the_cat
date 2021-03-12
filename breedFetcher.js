const request = require("request");
const getMeACatHere = "https://api.thecatapi.com/v1/breeds/search?q=";

const breedFetcher = (breed, callBack) => {
  request(getMeACatHere + breed, (error, response, body) => {
    if (error !== null) {
      //console.log("Sorry an error occured\n" + error);
      callBack(error, null);
    } else {
      //console.log(body);
      const data = JSON.parse(body);
      if (body === "[]") {
        //console.log(`Sorry there are no ${breed}'s found in the database.`);
        callBack(`Sorry there are no ${breed}'s found in the database.`, null);
      } else {
        //console.log(data[0]["description"]);
        callBack(error, data[0]["description"]);
      }
    }
  });
};

module.exports = breedFetcher;