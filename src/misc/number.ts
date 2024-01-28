export const toNumberIfNotEmpty = (value: string) =>
  value === "" ? value : parseFloat(value);
