module.exports = function toReadable(number) {
    let result = '';
    if (number === 0) {
        result = 'zero';
    } else if (number < 10) {
        result = digits(number);
    } else if (number >= 10 && number < 100) {
        result = dozens(number);
    } else if (number >= 100) {
        result = hundreds(number);
    }
    return result.trim();
}

const digits = number => {
    switch (number % 10) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        default: return "";
    }
}

const dozens = number => {
    switch (Math.floor(number / 10)) {
        case 1: return dozen(number);
        case 2: return "twenty " + digits(number);
        case 3: return "thirty " + digits(number);
        case 4: return "forty " + digits(number);
        case 5: return "fifty " + digits(number);
        case 6: return "sixty " + digits(number);
        case 7: return "seventy " + digits(number);
        case 8: return "eighty " + digits(number);
        case 9: return "ninety " + digits(number);
        default: return "";
    }
}

const dozen = number => {
    switch (number) {
        case 10: return "ten";
        case 11: return "eleven";
        case 12: return "twelve";
        case 13: return "thirteen";
        case 14: return "fourteen";
        case 15: return "fifteen";
        case 16: return "sixteen";
        case 17: return "seventeen";
        case 18: return "eighteen";
        case 19: return "nineteen";
        default: return "";
    }
}

const hundreds = number => {
    let firstDigit = digits(Math.floor(number / 100));
    if (number % 100 < 10) {
        return firstDigit + " hundred " + digits(number);

    }
    else {
        return firstDigit + " hundred " + dozens(number % 100);
    }
}