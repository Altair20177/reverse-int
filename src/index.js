module.exports = function reverse (n) {
  let str = String(n);
  str = str.split('').reverse().join('');
  let num = Number(str);
  return num;
}
