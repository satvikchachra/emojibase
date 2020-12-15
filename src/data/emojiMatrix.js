import emojiData from './emojiData';

const emojiArray = Object.keys(emojiData);

let row = [];

const emojiMatrix = [];

emojiArray.forEach((emoji, idx) => {
    if (idx % 7 == 0 && idx != 0) {
        emojiMatrix.push(row);
        row = [];
        row.push(emoji);
    } else {
        row.push(emoji);
    }
});

export default emojiMatrix;