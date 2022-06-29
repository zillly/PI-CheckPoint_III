//1 Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).

/* 2 Na função construtora crie o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
 Crie alguns alunos para testar a sua função construtora.

 3- crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number),
  faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).


 4- Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
  deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado,
  o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
  Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
  
6- Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.*/

function aluno(nome,qtDeFaltas,notas){
this.nome = nome
this.qtDeFaltas = qtDeFaltas 
this.notas = notas
this.calcularMedia = function(){
    let soma = 0;
    for(let i = 0; i < this.notas.length; i++){
        soma += this.notas[i];
    }
    return soma/this.notas.length
}
this.faltas = function(){
    return qtDeFaltas + 1
}
}


let aluno1 = new aluno('Gilmar Miranda',1,[9,10,10] )
let aluno2 = new aluno('Erico Telles',2,[9,6,6])
let aluno3 = new aluno('Jhonny Alessandro',10,[1,2,1])
let aluno4 = new aluno('Jackson Fronzen',3,[1,6,10])
let aluno5 = new aluno('Thienry Jonson',4,[7,9,5])
let aluno6 = new aluno('Kaio Pato',1,[5,5,5])
let aluno7 = new aluno('Luise Miranda',11,[7,8,7])

let curso = {
    nome : 'DH',
    aprovacao : 7 ,
    faltaMx : 4 ,
    listEst: [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7],
    cadastrarAluno (nome,qtDeFaltas,notas){
        let nAluno = new aluno (nome,qtDeFaltas,notas)
        //console.log(nAluno)
         return this.listEst.push(nAluno)
    },
    aprovado (aluno){
        let nota = aluno.calcularMedia()
        let aFalta = aluno.qtDeFaltas
        let nMaisFalta = this.aprovacao * 0.1
        return !!(nota >= this.aprovacao && aFalta < this.faltaMx || aFalta == this.faltaMx && nota >= nMaisFalta)

    },
    resultadosDosAlunos (){
        let resultados = []
        for(let aLista of this.listEst ){
            resultados.push(this.aprovado(aLista))
        }
        console.log(resultados)
        return resultados
    }

}

resultadosDosAlunos = () => {
    let resultados = []
    for(let aLista of curso.listEst ){
        resultados.push(curso.aprovacao(aLista))
    }
    console.log(resultados)
    return resultados
}


curso.resultadosDosAlunos()

curso.cadastrarAluno("João José",5,[6,6,10])
curso.cadastrarAluno("Roberto Alves",5,[5,7,9])

console.log(aluno2.calcularMedia())

console.log(aluno1.faltas())
