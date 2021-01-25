const { validateCnpj } = require("../src");

const documentsValid = [
  "14.098.521/0001-38",
  "53.957.695/0001-60",
  "96.521.191/0001-06",
  "56.245.155/0001-42",
];

const documentsInvalid = [
  "14.098.521/0001-41",
  "53.957.695/0001-63",
  "96.521.191/0001-17",
  "56.245.155/0001-22",
  "00.000.000/0000-00",
  "11.111.111/1111-11",
  "22.222.222/2222-22",
  "33.333.333/3333-33",
  "33.333.333/3333-",
  "33.333.333/3333-444",
  56245155000142,
  " ",
  "",
];

describe("function says whether CNPJ document is true or false", () => {
  documentsValid.map((el) => {
    it(`should be return true if passed ${el}`, () => {
      const result = validateCnpj(el);
      expect(result).toEqual(true);
    });
  });

  documentsInvalid.map((el) => {
    it(`should be return false if passed ${el}`, () => {
      const result = validateCnpj(el);
      expect(result).toEqual(false);
    });
  });
});
