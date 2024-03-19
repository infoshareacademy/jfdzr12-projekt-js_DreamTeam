// Generator silnego hasła
// Opracuj algorytm generujący silne hasło spełniające następujące wymogi:

// min. 1 mała litera
// min. 1 wielka litera
// min. 1 cyfra
// min. 1 znak specjalny
// o długości 12 znaków
// Program powinien być prosty we wprowadzaniu zmian powyższych kryteriów, tak aby możliwe było szybkie, jednolinijkowe zmodyfikowanie:

// minimalnej ilości znaków z wybranych grup
// oczekiwanej długości hasła, w przedziale np. 12-24 znaków

function createPassword(numberLowercaseChars = 1, numberUppercaseChars = 1, numberNumericChars = 1, numberSpecialChars = 1, passwordLength = 12) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  const getRandomChar = (charSet) => charSet[Math.floor(Math.random() * charSet.length)];

  const password =
    Array.from({ length: numberLowercaseChars }, () => getRandomChar(lowercaseChars)).join('') +
    Array.from({ length: numberUppercaseChars }, () => getRandomChar(uppercaseChars)).join('') +
    Array.from({ length: numberNumericChars }, () => getRandomChar(numberChars)).join('') +
    Array.from({ length: numberSpecialChars }, () => getRandomChar(specialChars)).join('') +
    Array.from({ length: (passwordLength - numberLowercaseChars - numberUppercaseChars - numberNumericChars - numberSpecialChars) }, () => getRandomChar(lowercaseChars + uppercaseChars + numberChars + specialChars)).join('');

  // console.log(password)

  const shuffledPassword = password.split('').sort(() => Math.random() - 0.5).join('')

  return shuffledPassword;

}

const newPassword = createPassword(2, 3, 4, 1, 15);
console.log(newPassword);
const newPassword2 = createPassword(5, 5, 5, 5, 24);
console.log(newPassword2);
const newPassword3 = createPassword(3, 4, 2, 1, 20);
console.log(newPassword3);