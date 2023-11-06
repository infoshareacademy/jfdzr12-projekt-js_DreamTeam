
const text= "Pierwszy #projekt #javascript ćwiczenie"; 
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === "#") {
    const p = text.indexOf(' ', i);
    console.log(text.substring(i+1, p));
    i = p;
  }
console.log(i);
}

