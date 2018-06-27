import delay from "delay";
import randomInt from "random-int";

const getList = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};
const getRandomDelay = () => randomInt(500, 1000);

export const getItems = () => {
  return delay(getRandomDelay(), getList());
};

export const createItem = item => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newList = getList().concat(item);
      localStorage.setItem("list", JSON.stringify(newList));
      resolve();
    }, getRandomDelay());
  });
};

export const deleteItem = itemId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newList = getList().filter(i => i.id !== itemId);
      localStorage.setItem("list", JSON.stringify(newList));
      resolve();
    }, getRandomDelay());
  });
};
