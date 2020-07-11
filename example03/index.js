// 箭头函数 + Promise
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Const
const name = "jay";

// 类
class Person {
  constructor() {
    this.name = "人类";
  }
  run() {
    console.log("人类可以跑");
  }
}

class Chinese extends Person {}

// Symbol
const sym = Symbol(name);

// Set + Map
const set = new Set([1, 2, 3, 4, 5]);
const map = new Map([["name", "Jay"]]);

// async + await
const getName = async () => {
  await sleep(2000);
  return name;
};

export default {
  sleep,
  name,
  Chinese,
  sym,
  set,
  map,
  getName,
};
