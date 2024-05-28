const cardNum = 6011000990139424;
const cardArray = cardNum.toString().split('');

const oddDigits = cardArray.reverse().filter((_, index) => index % 2 === 0);
const evenDigits = [];

for (let i = 0; i < cardArray.length; i++) {
    if (i % 2 !== 0) {
        evenDigits.push(cardArray[i]);
    };
};

evenDigits.reverse();

const doubleEven = [];

evenDigits.forEach((digit) => {
    const doubled = digit * 2;
    if (doubled > 9) {
        const splitDouble = doubled.toString().split('');
        splitDouble.forEach((num) => {
            doubleEven.push(Number(num));
        })
    } else {
        doubleEven.push(digit * 2);
    }
})

const adder = (array) => {
    let sum = 0;
    array.forEach((num) => {
        sum += Number(num);
    });
    return sum;
};

let evenSum = adder(doubleEven);
let oddSum = adder(oddDigits);

const totalSum = evenSum + oddSum;

totalSum % 10 === 0 ? console.log("Card is Valid") : console.log("Card is not Valid");