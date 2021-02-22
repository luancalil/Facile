function clique(){
  let email = document.getElementById('email1').value;

  localStorage.setItem("email", email);
  console.log(localStorage);
}

function contato(){
  let email1 = document.getElementById('email').value;
  let nome = document.getElementById('nome').value;
  let mensagem = document.getElementById('mensagem').value;

  localStorage.setItem('email1',email1);
  localStorage.setItem('nome',nome);
  localStorage.setItem('mensagem',mensagem);

  console.log(localStorage);


  
}
