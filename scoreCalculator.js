const getScore = (scores) => {
    let totalScore = 0;
    let index = 0;
    let length = scores.length;
    if (length > 21) throw new Error('Invalid input size: should be less than or equal to 21');

    scores.forEach((element) => {
        if (isNaN(element)) throw new Error('Invalid Input: score should be number');
        if (element > 10) throw new Error('Invalid Input: score should be less than or equal to 10');
    });

    let frameCount = length == 21 ? 1 : 0;//handels case for more than 10 frames 

    while (index < length) {
        if (frameCount == 10) {
            if (scores[index] == 10) {
                totalScore += 10 + scores[index + 1] + scores[index + 2];
                index += 3;
            } else if (scores[index + 1] + scores[index] == 10) {
                totalScore += 10 + scores[index + 2];
                index += 3;
            } else {
                totalScore = scores[index + 1] + scores[index];
            }
        } else if (scores[index] == 10) {
            totalScore += 10 + scores[index + 1] + scores[index + 2];
            index += 1;
            frameCount += 1;
        } else if (scores[index] + scores[index + 1] == 10) {
            totalScore += 10 + scores[index + 2];
            index += 2;
            frameCount += 1;
        } else {
            totalScore += scores[index] + scores[index + 1];
            index += 2;
            frameCount += 1;
        }
    }
    return totalScore;
};

const getBestPlayer = (Games) => {
    let players = [];
    Games.forEach((element) => {
        players.push(getScore(element));
        console.log(element);
    });
    const bestPlayer = Math.max(...players);
    return 'Player ' + (players.indexOf(bestPlayer) + 1) + ' got the highest score.';
};
module.exports = { getScore, getBestPlayer };

