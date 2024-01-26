let num1 = +prompt('1 son kiriting');
let num2 = +prompt('2 son kiriting');

confirm(` 
OK ni bosangiz raqam qo'shiladi
OTMENA ni bosangiz raqam ayriladi
`)

if (confirm) {
    console.log(num1 + num2);
} else {
    console.log(num1 - num2);
}