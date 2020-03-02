const usuarios = [
  { nome: "Carlinhos", tecnologias: ["html", "css"] },
  { nome: "Gabriel", tecnologias: ["javascript", "c#"] },
  { nome: "Joselito", tecnologias: ["Python", "Nodejs"] }
];

function checaSeUsuarioUsaCSS(user) {
  for (let i = 0; i < user.tecnologias.length; i++) {
    if (user.tecnologias[i] == "css") {
      return true;
    }
  }
  return false;
}

function listaUser(user) {
  for (let i = 0; i < user.length; i++) {
    const usuarioCss = checaSeUsuarioUsaCSS(user[i]);

    if (usuarioCss) {
      console.log(`O usuario ${user[i].nome} trabalha com CSS`);
    }
  }
}

listaUser(usuarios);

// function printUsers2(usuario) {
//   for (let i = 0; i < usuario.length; i++) {
//     console.log(
//       `${usuario[i].nome} trabalha com ${usuario[i].tecnologias[0]}, ${usuario[i].tecnologias[1]}`
//     );
//     if (usuario[i].tecnologias[0] == "css" || usuario[i].tecnologias[1] == "css") {
//       console.log(`O usuario ${usuario[i].nome} trabalha com CSS`);
//     } else {
//       console.log(`O usuario ${usuario[i].nome} não trabalha com CSS`);
//     }
//   }
// }

// printUsers(usuarios);
