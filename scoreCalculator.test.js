const { getScore, getBestPlayer } = require('./scoreCalculator.js');

describe('Total score calculator test', () => {
    it('should give 90 when score1 array is proided', () => {
        const scores1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        expect(getScore(scores1)).toBe(90);
    });
    it('should return 48 when score2 array is provided', () => {
        expect(getScore([10, 5, 5, 9, 0])).toBe(48);
    });
    it('should through an error if score is greater than 10', () => {
        const scores2 = [3, 6, 11, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        expect(() => {
            getScore(scores2);
        }).toThrow('Invalid Input: score should be less than or equal to 10');
    });
    it('should give total score of 30 when score3 array is given', () => {
        const scores3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        expect(getScore(scores3)).toBe(30);
    });
    it('should throw error if the input size is greater than 21', () => {
        const scores4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 9];
        expect(() => {
            getScore(scores4);
        }).toThrow('Invalid input size: should be less than or equal to 21');
    });
    it('should throw an error if input is not a number', () => {
        expect(() => {
            getScore([3, 6, 'abs', 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        }).toThrow('Invalid Input: score should be number');
    });
});


describe('Test for getting the best player', () => {
    it('Should return 2nd player scored the highest for game 1', () => {
        const firstGame = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
            , [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]];
        expect(getBestPlayer(firstGame)).toBe('Player 2 got the highest score.');
    });
    it('should throw error if the input size is greater than 21', () => {
        const secondGame = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 9]
            , [10, 5, 5, 9, 0]];
        expect(() => {
            getBestPlayer(secondGame);
        }).toThrow('Invalid input size: should be less than or equal to 21');
    });
    it('should throw an error if input is not a number', () => {
        expect(() => {
            const thirdGame = [[3, 6, 'abs', 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
                , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]];
            getBestPlayer(thirdGame);
        }).toThrow('Invalid Input: score should be number');
    });
    it('should through an error if score is greater than 10', () => {
        const fourthGame = [[3, 6, 11, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
            , [10, 5, 5, 9, 0]];
        expect(() => {
            getBestPlayer(fourthGame);
        }).toThrow('Invalid Input: score should be less than or equal to 10');
    });
});