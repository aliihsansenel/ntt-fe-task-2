// 1234.5 --> 1.234,50
function tls(number) {
    return number.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
}

export { tls };