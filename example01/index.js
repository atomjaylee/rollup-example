// --------- 没用到的代码 ---------
const unUserFunction = () => {
  return "unUseFunction return";
};
const unUseNum = 22;

// -------- 实际用到的代码 --------
const isFunction = (target) => {
  return Object.prototype.toString().call(target) === "[object Function]";
};
const result = isFunction(getNumber);

export default result;
