import React from "./ModuleA"

// 箭头函数 + Promise
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 类
class Person {
  constructor() {
    this.name = "人类";
  }
}

const sym = new Symbol({ name: "Jay" });

// async + await
const getName = async () => {
  await sleep(2000);
  return "Jay";
};

export default {
  sleep,
  Person,
  sym,
  React,
  getName,
};
