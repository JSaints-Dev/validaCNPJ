const sanitizeDigits = (valueStr) => {
  return valueStr.replace(/[^\d]+/g, "");
};

const checkIsAllCharactersEqual = (valueStr) => {
  return /^(.)\1+$/.test(valueStr) ? true : false;
};

const calcLastDigits = (valueInt) => {
  const digit = valueInt % 11;
  return digit >= 2 ? 11 - digit : 0;
};

const reducer = (arr) => {
  const numbers = arr.map((el) => el);
  const peso = [2, 3, 4, 5, 6, 7, 8, 9];
  const result = numbers
    .reverse()
    .reduce((acc, el, id) => acc + el * peso[id % peso.length], 0);

  return result;
};

const digitsChecker = (numbers, lastDigits) => {
  const [firstVerifier, secondVerifier] = lastDigits.split("").map((el) => +el);
  const numbersArr = numbers.split("").map((el) => +el);
  const firstCalc = reducer(numbersArr);
  const digit13 = calcLastDigits(firstCalc);

  if (digit13 !== firstVerifier) return false;

  numbersArr.push(digit13);
  const secondCalc = reducer(numbersArr);
  const digit14 = calcLastDigits(secondCalc);

  return digit14 === secondVerifier;
};

const verifyCnpj = (value) => {
  const size = value.length - 2;
  const numbers = value.substring(0, size);
  const lastDigits = value.substring(size);

  const isValid = digitsChecker(numbers, lastDigits);

  return isValid;
};

const validateCnpj = (value) => {
  if (typeof value !== "string") return false;
  if (value === "") return false;

  const cnpj = sanitizeDigits(value);

  if (cnpj.length !== 14) return false;
  if (checkIsAllCharactersEqual(cnpj)) return false;

  const isValid = verifyCnpj(cnpj);

  return isValid;
};

module.exports = { validateCnpj };
