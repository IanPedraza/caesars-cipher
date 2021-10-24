const code = function (input, shifts) {
  if (shifts < 0) {
    return code(input, shifts + 95);
  }

  return input.replace(/[\x20-\x7E]/g, (char) =>
    String.fromCharCode(((char.charCodeAt() - 32 + shifts) % 95) + 32)
  );
};

const cipher = function () {
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

  let cipher = code(input, numberOfShifts);
  let uncipher = code(cipher, -numberOfShifts);

  inputCipher.innerText = cipher;
  inputUncipher.innerText = uncipher;
};

const inputShifts = document.getElementById("inputShifts");
const inputText = document.getElementById("inputText");
const inputCipher = document.getElementById("inputCipher");
const inputUncipher = document.getElementById("inputUncipher");
const errorInputText = document.getElementById("errorInputText");
const errorInputShifts = document.getElementById("errorInputShifts");
