const student = [
    {
        nome: "Eloisa",
        nota1: 10,
        nota2: 10
    },
    {
        nome: "Erich",
        nota1: 9,
        nota2: 8
    },
    {
        nome: "Lucas",
        nota1: 7,
        nota2: 6
    }
]

const media = 7;

function calcMedia(nota1, nota2){
    return (nota1 + nota2) / 2;
}

function printMedia(estudante){
    let aprovado;
    let media = calcMedia(estudante.nota1, estudante.nota2);
    if(media > 7){
        aprovado = "Aprovado";
    } else{
        aprovado = "Reprovado";
    }

    return `
        ${estudante.nome}, sua média é ${media}, Você foi ${aprovado}.
    `;
}

for(let estudante of student){
    let messageAproved = printMedia(estudante)
    alert(messageAproved)
}