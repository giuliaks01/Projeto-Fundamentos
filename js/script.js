function decimalParaBinario(decimal) {
    return parseInt(decimal).toString(2);
}
function binarioParaDecimal(binario) {
    var decimal = 0;
    var posicao = 0;
    while (binario > 0) {
        var digito = binario % 10;
        decimal += digito * Math.pow(2, posicao);
        binario = Math.floor(binario / 10);
        posicao++;
    }
    return decimal;
}
function decimalParaHexadecimal(decimal) {
    return parseInt(decimal).toString(16).toUpperCase();
}
function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}
