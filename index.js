function yams(rolls) {
    let count = 0;
    let occurance = 0;

    for (let i = 0; i < rolls.length; i++) {
        let roll = rolls[i];

        roll.forEach((element, index) => {
            if (element === [1, 1, 1, 2, 2][index]) {
                occurance += 1;
            }
        });

        if (contains === roll.length) {
            count += 30;
        }
    }


    return count
}


module.exports = yams;