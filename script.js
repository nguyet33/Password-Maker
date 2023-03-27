// Get references to the #generate element - Needs query selector
var generateBtn = document.querySelector("#generate");

// Initialize prompt sequence!
function generatePassword() {
  // When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.

  // Select password length prompt
  var pwdLength = prompt(
    "Please specify password length as a numeric value. Number of characters must be between 8 and 128."
  );

  while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    alert("Length must be between 8 and 128 characters. Please try again");
    var pwdLength = prompt(
      "Please specify password length. Number of characters must be between 8 and 128."
    );
  }

  // Confirm to user how many characters their password will contain
  alert(`Thank you, your password will contain ${pwdLength} characters`);

  // The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.
  var characterTypes = [];

  // Confirm character type prompts - verify in console log
  var lowerCase = confirm(
    "Please click OK to include lowercase letters, otherwise click CANCEL"
  );
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm(
    "Please click OK to include uppercase letters, otherwise click CANCEL"
  );
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

  var numeric = confirm(
    "Please click OK to include numbers, otherwise click CANCEL"
  );
  if (numeric === true) {
    characterTypes.push(2);
  }
  console.log(numeric);

  var special = confirm(
    "Please click OK to include special characters, otherwise click CANCEL"
  );
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);
  var getPassword = "";

  // Initiate variable array production sequence \\
  // "For" loop randomly determines characters based on parameters set by "else, if" strings below //
  for (var i = 0; i < pwdLength; i++) {
    var characterType =
      characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(characterType);

    // Attaches random character type with number then assigns ascii codes (the text visible to the user) to each value
    if (characterType === 0) {
      console.log("Random lowercase");
      // #97 is the Decimal representation of lowercase a in the ascii table, and each consecutive letter is one digit higher.
      //Lowercase z is #122 minus #97 = 25. "25 is the remaining number of letters in the english alphabet" (var function determines proper character type)//
      var characterCode = Math.floor(Math.random() * 25) + 97;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    } else if (characterType === 1) {
      console.log("Random uppercase");
      // #65 is the Decimal representation of uppercase A in the ascii table, and each consecutive letter is one digit higher.
      //Uppercase Z is #90 minus #65 = 25 "25 is the remaining number of letters in the english alphabet" (var function determines proper character type)//
      var characterCode = Math.floor(Math.random() * 25) + 65;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    } else if (characterType === 2) {
      console.log("Random number");
      // #48 is the Decimal representation of ZERO in the ascii table, and each consecutive number is one digit higher.
      //Nine is #57 minus #48 = 9 "9 is the quantity of remaining numerical characters" (var function determines proper character type)//
      var characterCode = Math.floor(Math.random() * 9) + 48;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    } else if (characterType === 3) {
      console.log("Random special character");
      // #33 is the Decimal representation of ! in the ascii table, and each consecutive character is one digit higher.
      //(this applcation uses !, ", #, $, %, &) & is #38 minus #33 = 5 "5 is the number of remaining special characters" (var function determines proper character type)//
      var characterCode = Math.floor(Math.random() * 5) + 33;
      var asciiCode = String.fromCharCode(characterCode);
      getPassword = getPassword.concat(asciiCode);
    }

    // When the user answers each prompt, their input should be validated and at least one character type should be selected.
    // If no characters are selected user is prompted to select at least one type.
    else {
      alert("Please select at least one character type.");
      return "NO PASSWORD FOR YOU! TRY AGAIN!";
    }
    console.log("Your password is " + getPassword);
  }
  return getPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
