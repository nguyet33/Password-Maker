// Get references to the #generate element - Needs query selector
var generateBtn = document.querySelector("#generate");

// Initialize prompt sequence!
function generatePassword() {

  // When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.    

  // Select password length prompt
  var pwdLength = (prompt("Please specify password length as a numeric value. Number of characters must be between 8 and 128."));

  while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    alert("Length must be between 8 and 128 characters. Please try again");
    var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
  }

  // Confirm to user how many characters their password will contain  
  alert(`Thank you, your password will contain ${pwdLength} characters`);

  // The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.
  var characterTypes = [];

  // Confirm character type prompts - verify in console log
  var lowerCase = confirm("Please click OK to include lowercase letters, otherwise click CANCEL");
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Please click OK to include uppercase letters, otherwise click CANCEL");
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

  var numeric = confirm("Please click OK to include numbers, otherwise click CANCEL");
  if (numeric === true) {
    characterTypes.push(2);
  }
  console.log(numeric);

  var special = confirm("Please click OK to include special characters, otherwise click CANCEL");
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
