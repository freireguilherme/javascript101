
var pesoIdeal = function(pessoa){
    if(pessoa.sexo == 'f')
        return `O peso ideal pra vc é  ${((62.1* pessoa.altura)-44.7).toFixed(2)}`;
    if(pessoa.sexo == 'm')
        return `O peso ideal pra vc é ${((72.7* pessoa.altura)-58).toFixed(2)}`;
}

var createPessoa = function(sexo, altura){
    return {
        sexo: sexo,
        altura: altura
    };
};

/*var Pessoa = function(sexo, altura){
    this.sexo = sexo;
    this.altura = altura;
};

var pessoa1 = new Pessoa('f', 1.65);
var pessoa2 = new Pessoa('m', 1.85);
var pessoa3 = new Pessoa('f', 1.55);
var pessoa4 = new Pessoa('m', 1.75);
*/


var pessoas = [];

pessoas.push(createPessoa('f',1.65));
pessoas.push(createPessoa('m',1.85));
pessoas.push(createPessoa('f',1.55));
pessoas.push(createPessoa('m',1.75));

for(var i=0;i<4;i++)
    console.log(pesoIdeal(pessoas[i]))