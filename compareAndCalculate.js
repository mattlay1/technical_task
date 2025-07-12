function compareAndCalculate(a, b) {
  if (a > b) {
    console.log("a > b");
  } else if (a < b) {
    console.log("a < b");
  } else {
    console.log("a = b");
  }

  console.log("Сложение: " + (a + b));
  console.log("Вычитание: " + (a - b));
  if (b !== 0) {
    console.log("Деление: " + (a / b));
  } else {
    console.log("Деление на ноль невозможно");
  }
  console.log("Умножение: " + (a * b));
}

compareAndCalculate(10, 5);