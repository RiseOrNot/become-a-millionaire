type NumberToStringType = (value: number) => string;

export const intToChar: NumberToStringType = (value) => {
  const code = 'A'.charCodeAt(0);

  return String.fromCharCode(code + value);
};

export const moneyFormatter: NumberToStringType = (value) => `$${value.toLocaleString()}`;
