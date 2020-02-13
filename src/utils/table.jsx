function useNumbers() {
    return [...Array(10)]
        .map( (_, index) => {
            return index.toString();
        });
}

function useAlphabet() {
    const uppercase = [...Array(26)]
        .map( (_, index) => String.fromCharCode(index + 65) );

    const lowercase = [...Array(26)]
        .map( (_, index) => String.fromCharCode(index + 97) );

    return [
        ...lowercase,
        ...uppercase
    ];
}



function useHtmlEntityUnicode(amount) {
    return [...Array(amount)]
        .map( (_, index) => ('&#' + (index + 300) + ';') );
}

function useTable(amount) {
    const basic = [
        ...useNumbers(),
        ...useAlphabet()
    ];

    return [
        ...basic,
        ...useHtmlEntityUnicode(amount - basic.length)
    ];
}

export default useTable;
