export const moneyFormat = (money) =>
  money?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") || 0;
