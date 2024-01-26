// 4. Generator silnego hasła z preferencjami 🧐
// Plik źródłowy: create-password-parametrized.js

// Napisz funkcję createPassword generującą silne hasło jak powyżej, umożliwiającą uwzględnienie innych wymogów przy każdym wywołaniu, np.

// wykluczenie znaków specjalnych
// zwiększenie minimalnej ilość znaków dla wybranych grup znaków
// zmianę długości generowanego hasła
// Przykładowe wywołanie:

// createPassword({minLowerCase: 2, minNumbers: 3, minLength: 16, exclude: ['specials']})
// Funkcja powinna każdorazowo zwracać inne hasło.