function fromDecimal(value, system, table) {
    let subject = Number.parseInt(value);

    if (subject < system) {
        return table[subject];
    }

    const result = [];

    while (subject >= system) {
        const quotient = Math.floor(subject / system);
        const difference = subject - quotient * system;

        result.push(table[difference]);

        subject = quotient;
    }

    result.push(table[subject]);

    result.reverse();
    
    return result.join('');
}

function toDecimal(value, system, table) {
    let subject = Array.from(value);
    
    let result = 0;

    for (let i = 0; i < subject.length; i++) {
        const pow = Math.pow(system, subject.length - i - 1);
        result += pow * table.indexOf(subject[i]);
    }

    return result;
}

function addition(firstAddend, secondAddend, system, table) {
    const decimalFirstAddend = toDecimal(firstAddend, system, table);
    const decimalSecondAddend = toDecimal(secondAddend, system, table);

    const decimalSum = decimalFirstAddend + decimalSecondAddend;

    return fromDecimal(decimalSum, system, table);
}

function subtraction(minuend, subtrahend, system, table) {
    const decimalMinuend = toDecimal(minuend, system, table);
    const decimalSubtrahend = toDecimal(subtrahend, system, table);

    const decimalDifference = decimalMinuend - decimalSubtrahend;

    return fromDecimal(decimalDifference, system, table);
}

function multiplication(multiplicand, multiplier, system, table) {
    const decimalMultiplicand = toDecimal(multiplicand, system, table);
    const decimalMultiplier = toDecimal(multiplier, system, table);

    const decimalProduct = decimalMultiplicand * decimalMultiplier;

    return fromDecimal(decimalProduct, system, table);
}

function division(dividend, divisor, system, table) {
    const decimalDividend = toDecimal(dividend, system, table);
    const decimalDivisor = toDecimal(divisor, system, table);

    const decimalQuotient = decimalDividend / decimalDivisor;

    return fromDecimal(decimalQuotient, system, table);
}

export {
    fromDecimal,
    toDecimal,
    addition,
    subtraction,
    multiplication,
    division
}
