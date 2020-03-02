const turmaA = [
  {
    nome: "Jaiminho",
    nota: 7
  },
  {
    nome: "Joao",
    nota: 9
  },
  {
    nome: "Jose",
    nota: 3
  },
  {
    nome: "Jinaldo",
    nota: 5
  },
  {
      nome:"Ultimo",
      nota:10
  }
];

const turmaB = [
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Rian",
    nota: 2
  },
  {
    nome: "Ruan",
    nota: 3
  },
  {
    nome: "Reinaldo",
    nota: 6
  }
];

function calculaMedia(alunos) {
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
  }

  const media = soma / alunos.length;
  return media;
}

const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);

function enviaMsg(media, turma) {
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabens`);
  } else {
    console.log(`A media da ${turma} é menor que 5`);
  }
}  

enviaMsg(media1, "turmaA");
enviaMsg(media2, "turmaB");
