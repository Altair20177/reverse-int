module.exports = function reverse (n) {
  if (n < 0) n = -n;
  let str = String(n);
  str = str.split('').reverse().join('');
  let num = Number(str);
  return num;
}
