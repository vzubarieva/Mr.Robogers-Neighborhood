// Business logic

function beepBoop(number) {
  const parsedNumber = parseInt(number);
  const convertedNumbers = [];
  for (let loopIndex = 0; loopIndex <= parsedNumber; loopIndex += 1) {
    if (loopIndex.toString().indexOf("3") > -1) {
      convertedNumbers.push("Won't you be my neighbor?");
    } else if (loopIndex.toString().indexOf("2") > -1) {
      convertedNumbers.push("Boop!");
    } else if (loopIndex.toString().indexOf("1") > -1) {
      convertedNumbers.push("Beep!");
    } else {
      convertedNumbers.push(loopIndex);
    }
  }

  return convertedNumbers;
}
