/* arrays de filme */
const filmes = ["1- Os Sete Samurais (1954)",
  "2 - Bonnie e Clyde - Uma Rajada de Balas (1967)",
  "3 - Apertem os Cintos. . . O Piloto Sumiu (1980)",
  "4 - outor Jivago (1965)",
   "5 - Contatos Imediatos de Terceiro Grau (1977)",
  "6 - Quem Quer Ser um Milionário? (2008)",
  "7 - A Ponte do Rio Kwai (1957)"];

const listaFilmes = document.getElementById("listaFilmes");
const subTitulo = document.getElementById('sub-titulo');

/* função */
function inserirFilmes() {
  subTitulo.style.display="block";
  listaFilmes.style.display="inline";
  
  listaFilmes.innerHTML = ""; // Limpa a lista antes de carregar os filmes

  /* forEach */
  filmes.forEach(filme => {
      const itemFilme = document.createElement("li");
      itemFilme.textContent = filme;
      listaFilmes.appendChild(itemFilme);
  });
   
}

