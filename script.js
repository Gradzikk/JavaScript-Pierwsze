// Zmienne a i b
var a = 5;
var b = 3;

// Obliczenia i wyświetlanie wyników
var suma = a + b;
var różnica = a - b;
var iloczyn = a * b;
var iloraz = a / b;

console.log("Suma: " + suma);
console.log("Różnica: " + różnica);
console.log("Iloczyn: " + iloczyn);
console.log("Iloraz: " + iloraz);

// Funkcja do obliczenia BMI
function obliczBMI(waga, wzrost) {
  var bmi = waga / (wzrost * wzrost);
  return bmi;
}

// Wywołanie funkcji i instrukcja warunkowa
var waga = 70; // w kilogramach
var wzrost = 1.75; // w metrach
var bmi = obliczBMI(waga, wzrost);

if (bmi < 18.5) {
  console.log("Niedowaga");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Waga prawidłowa");
} else {
  console.log("Nadwaga");
}

// Tablica liczb i pętla for
var liczby = [1, 2, 3, 4, 5];
for (var i = 0; i < liczby.length; i++) {
  console.log(liczby[i] * 2);
}

// Tablica z owocami i pętla forEach
var owoce = ["jabłko", "banan", "gruszka", "śliwka"];
owoce.forEach(function(owoc) {
  console.log("Jem " + owoc + ".");
});

// Funkcja do porównywania liczb
function wiekszaLiczba(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var liczba1 = 10;
var liczba2 = 7;
var wieksza = wiekszaLiczba(liczba1, liczba2);
console.log("Większa liczba: " + wieksza);

// Funkcja do obliczenia pola i obwodu prostokąta
function obliczPoleObwod(prostokat) {
  var pole = prostokat.dlugosc * prostokat.szerokosc;
  var obwod = 2 * (prostokat.dlugosc + prostokat.szerokosc);
  console.log("Pole: " + pole);
  console.log("Obwód: " + obwod);
}

var prostokat = {
  dlugosc: 5,
  szerokosc: 3
};

obliczPoleObwod(prostokat);