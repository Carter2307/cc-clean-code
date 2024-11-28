function yams(rolls) {
  let count = 0;
  let occurance = 0;

  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i];
    occurance = countOccurence(roll);
  }

  if (occurance == 3) {
    count = 30;
  }
    
  if (occurance == 5) {
    count = 50;
  }

  return count;
}

function countOccurence(roll) {
  let count = 0;
  for (let j = 0; j < roll.length; j++) {
    for (let y = 0; y < roll.length; y++) {
      if (roll[j] == roll[i]) {
        occurance += 1;
      } else {
        occurance = 0;
      }
    }
  }

  return count;
}

module.exports = yams;
