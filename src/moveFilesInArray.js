export function createSymbolsString(n, symbol) {
  var result = "";
  if (!symbol) {
    symbol = "*";
  }
  for (var i = 0; i < n; i++) {
    result += symbol;
  }
  return result;
}
export function printTringle(n) {
  for (var i = 1; i <= n; i++) {
    console.log(
      createSymbolsString(n - i, " ") + createSymbolsString(2 * i - 1, "")
    );
  }
}
printTringle(4);
function pop() {}
