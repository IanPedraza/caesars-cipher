const _code = function (input, shifts) {
  if (shifts < 0) {
    return _code(input, shifts + 95);
  }

  return input.replace(/[\x20-\x7E]/g, (char) =>
    String.fromCharCode(((char.charCodeAt() - 32 + shifts) % 95) + 32)
  );
};

const code = function () {
  errorInputText.innerText = null;
  errorInputShifts.innerText = null;

  let input = inputText.value;

  if (!input) {
    errorInputText.innerText = "El mensaje no puede quedar vacio.";
    return;
  }

  let numberOfShiftsStr = inputShifts.value;

  if (!numberOfShiftsStr) {
    errorInputShifts.innerText =
      "El número de corrimientos no puede quedar vacio.";
    return;
  }

  let numberOfShifts = parseInt(numberOfShiftsStr);

  let coded = _code(input, numberOfShifts);
  let decoded = _code(coded, -numberOfShifts);

  inputCipher.innerText = coded;
  inputUncipher.innerText = decoded;
};

const decode = function () {
  errorInputText.innerText = null;
  errorInputShifts.innerText = null;

  let input = inputText.value;

  if (!input) {
    errorInputText.innerText = "El mensaje no puede quedar vacio.";
    return;
  }

  let numberOfShiftsStr = inputShifts.value;

  if (!numberOfShiftsStr) {
    errorInputShifts.innerText =
      "El número de corrimientos no puede quedar vacio.";
    return;
  }

  let numberOfShifts = parseInt(numberOfShiftsStr);

  let decoded = _code(input, -numberOfShifts);

  inputCipher.innerText = input;
  inputUncipher.innerText = decoded;
};

const inputShifts = document.getElementById("inputShifts");
const inputText = document.getElementById("inputText");
const inputCipher = document.getElementById("inputCipher");
const inputUncipher = document.getElementById("inputUncipher");
const errorInputText = document.getElementById("errorInputText");
const errorInputShifts = document.getElementById("errorInputShifts");
