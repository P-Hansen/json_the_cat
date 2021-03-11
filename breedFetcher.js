const request = require("request");
const getMeACatHere = "https://api.thecatapi.com/v1/breeds/search?q=";
const whatBreed = process.argv.slice(2);

const breedFetcher = (address, breed) => {
  request(address + breed, (error, body) => {
    if (error !== null) {
      console.log("Sorry an error occured\n" + error);
      return;
    }
    //console.log(body);
    const data = JSON.parse(body);
    if (body === "[]") {
      console.log(`Sorry there are no ${breed}'s found in the database.`);
      return;
    }
    console.log(data[0]["description"]);
  });
};

breedFetcher(getMeACatHere, whatBreed[0]);