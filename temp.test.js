const Calculate = require("./temp");

test("tes hasil sama", () => {
   let calc = new Calculate();
   expect(calc.hasilSama(30)).toEqual(30);
});

test("celcius to farenheit", () => {
   let calc = new Calculate();
   expect(calc.celcius_farenheit(10)).toEqual(50);
});

test("celcius to reamur", () => {
   let calc = new Calculate();
   expect(calc.celcius_reamur(10)).toEqual(8);
});

test("farenheit to celcius", () => {
   let calc = new Calculate();
   expect(calc.farenheit_celcius(10)).toEqual(-12.222222222222221);
});

test("farenheit to reamur", () => {
   let calc = new Calculate();
   expect(calc.farenheit_reamur(10)).toEqual(-9.777777777777779);
});

test("reamur to celcius", () => {
   let calc = new Calculate();
   expect(calc.reamur_celcius(10)).toEqual(12.5);
});

test("reamur to farenheit", () => {
   let calc = new Calculate();
   expect(calc.reamur_farenheit(10)).toEqual(54.5);
});

test("rubah background", () => {
   let calc = new Calculate();
   expect(calc.rubahBackground("red")).toEqual("red");
});
