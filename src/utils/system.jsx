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

export {
    fromDecimal,
    toDecimal
}
