const text1 = 'kebab-case';
const text2 = 'snake_case';
const text3 = 'camelCase';
const text4 = 'PascalCase';

function changeToPascalCase(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.includes('-') === true) {
      const myArr = text.split('-')
      myArr.forEach((str, index, arr) => {
        if (str.length > 0) {
          arr[index] = str.charAt(0).toUpperCase() + str.slice(1);
        }
      })
      return myArr.join('')
    } else if (text.includes('_') === true) {
      const myArr = text.split('_')
      myArr.forEach((str, index, arr) => {
        if (str.length > 0) {
          arr[index] = str.charAt(0).toUpperCase() + str.slice(1);
        }
      })
      return myArr.join('')
    } else if (text.charAt(0) !== text.toUpperCase()) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      return text
    }
  };
}

console.log(changeToPascalCase(text1));
console.log(changeToPascalCase(text2));
console.log(changeToPascalCase(text3));
console.log(changeToPascalCase(text4));
console.log(changeToPascalCase('dowolny-tekst'));