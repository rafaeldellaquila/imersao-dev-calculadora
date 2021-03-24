function inputClear() {
  document.getElementById("inputCalc").value = "";
  document.getElementById("outputCalc").innerHTML = "Calcule";
}

function showNumber(numberValue) {
  document.getElementById("inputCalc").value += numberValue;
}

function resolveCalc() {
  let x = document.getElementById("inputCalc").value;
  let y = parseInt(eval(x));
  document.getElementById("outputCalc").innerHTML = y;
}
