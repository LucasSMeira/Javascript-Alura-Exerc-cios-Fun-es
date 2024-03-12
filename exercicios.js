
const pessoa = 'Fax';

const saudacao = (nome) =>{
    return `Seja bem vindo(a) ${nome}`;
}
console.log(saudacao(pessoa));

const idade = 19;

const verificaIdade = (idade) =>{
    if (idade < 18) {
        return `Voce  tem ${idade} anos e é menor de idade`;
    } else {
        return `Voce  tem ${idade} anos e é maior de idade`;
    }
}

console.log(verificaIdade(idade));

const palavra = 'arara';

const ehPalindrome = (palavra) =>{
    const reverso = palavra.split('').reverse().join('');
    if (palavra === reverso) {
        return true;
    } else {
        return false;
    }
}

console.log(ehPalindrome(palavra));

const num1 = 44;
const num2 = 12;
const num3 = 77;

const quemEhMaior = (num1,num2,num3) =>{
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
       return num3; 
    }
}

console.log(quemEhMaior(num1,num2,num3));

const base = 5;
const potencia = 5;

const calculaPotencia = (base,potencia) =>{
    return Math.pow(base,potencia);
}

console.log(calculaPotencia(base,potencia));