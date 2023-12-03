const text= "project-java-script"; 
for (let i = 0; i < text.length; i++) {
    if ((text.charAt(i) === "-") || (text.charAt(i) === "_")) {
      const p = text.indexOf('-', i);
      console.log(text.substring(i+1, p));

      i = p;
    } 
  console.log(i);
  }

  
//   Wypisz alternatywną formę napisu w postaci PascalCase.

// Przyjmij, że bazowy napis może być zapisany w formacie camelCase, PascalCase, 
// snake_case lub kebab-case.

// Np. dla projekt-java-script wypisany powinien zostać napis ProjektJavaScript.