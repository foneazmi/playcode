var fs = require("fs");
var config = require("./config.json");

const fetchData = (noId, code) =>
  new Promise((resolve, reject) =>
    fetch(`https://siakad.ub.ac.id/siamfile/${noId}/${code}.jpg`).then(
      (response) => {
        if (response.status === 404) {
          reject("not found");
        } else {
          resolve(`${code}`);
        }
      }
    )
  );

const fetchDataQueue = async (number) => {
  let rawKey = wordGenerator(number);
  console.log(rawKey);
  console.log(rawKey.join(""));
  fetchData(config.target, rawKey.join(""))
    .then((code) => {
      fs.appendFile(
        `${config.target}.txt`,
        `\n=====\n${code}\n${number}\n=====\n`,
        () => {}
      );
      console.log("gotcha");
    })
    .catch((error) => {
      console.log(error);
      fetchDataQueue(number + 1);
    });
};

const wordGenerator = (number) => {
  return [...Array(32)]
    .map((_, i) =>
      i === 0
        ? config.wordList[number % config.wordList.length]
        : config.wordList[
            Math.floor(number / Math.pow(config.wordList.length, i)) %
              config.wordList.length
          ]
    )
    .reverse();
};

fetchDataQueue(0);
