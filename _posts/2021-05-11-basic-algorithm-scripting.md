---
Layout:
Title: "Basic Algorithm Scripting"
Date: "2021-05-11"
---

## How do you convert Celsius to Fahrenheit code?

C° to F°: Celsius to Fahrenheit Conversion Formula

To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

## How do you write degrees Fahrenheit in JavaScript?

Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".

## How do you write Celsius in JavaScript?

function cToF(celsius) { var cTemp = celsius; var cToFahr = cTemp * 9 / 5 + 32; var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F. '; console. log(message); } function fToC(fahrenheit) { var fTemp = fahrenheit; var fToCel = (fTemp - 32) * 5 / 9; var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.