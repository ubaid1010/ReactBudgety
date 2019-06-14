export default (data) => {
  if (data.length > 0) {
    return data.map((item) => {
      return +item.amount;
    }).reduce((total, amount) => {
      return total + amount;
    });
  } else {
    return 0;
  }
}
