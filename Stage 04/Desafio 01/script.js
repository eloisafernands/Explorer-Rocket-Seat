let num1 = prompt("Digite um numero");
let num2 = prompt("Digite outro numero");

let soma = (Number(num1) + Number(num2));
let sub = (Number(num1) - Number(num2));
let mult = (Number(num1) * Number(num2));
let div = (Number(num1) / Number(num2));
let resto = (Number(num1) % Number(num2));

let result = alert(`
    A soma desses numeros é: ${soma}.
    A subtração desses numeros é: ${sub}.
    A multiplicação desses numeros é: ${mult}.
    A divisão desses numeros é: ${div.toFixed(2)}.
    O resto da divisão desses numeros é: ${resto}.
`);

if(resto == 0){
    alert("A soma desses dois números é um número par!")
} else{
    alert("A soma desses dois números é um número ímpar!")
}

if(num1 == num2){
    alert("Você inseriu dois números iguais!")
} else{
    alert("Você inseriu dois números diferentes!")
}