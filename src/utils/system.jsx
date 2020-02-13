function fromDecimal(value, system, table) {
    let subject = Number.parseInt(value);

    if (subject < system) {
        return table[subject];
    }

    const result = [];

    while (subject >= system) {
        const quotient = Math.floor(subject / system);
        const difference = subject - quotient * system;
        
        result.push(table[difference - 1]);

        subject = quotient;
    }

    result.push(1);

    result.reverse();
    
    return result.join('');
}

function toDecimal(value, system, table) {
    let subject = Array.from(value);
    
    subject = subject.map( (element) => {
        const isNeedConvert = table.indexOf(element) === -1;

        if (isNeedConvert) {
            element = `&#${element.charCodeAt(0)};`;
        }

        return element;
    });

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
