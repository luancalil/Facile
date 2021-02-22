function clique(){
  let nome = document.getElementById('nome').value;

  localStorage.setItem("nome", nome);

  console.log(localStorage);

}