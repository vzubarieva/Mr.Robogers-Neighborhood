// Business logic

function beepBoop(number) {
  const parsedNumber = parseInt(number);
  const result = [];
  for (let index = 0; index <= parsedNumber; index += 1) {
    result.push(index);
  }

  return result;
}
