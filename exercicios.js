
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