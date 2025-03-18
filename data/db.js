const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "users.json");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const cardsPath = path.join(__dirname, "cards.json");

const getCards = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(cardsPath, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

module.exports = { getUsers, getCards };
