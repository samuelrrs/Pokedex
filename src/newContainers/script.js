const btn = document.querySelector(".btn");
const conteudo = document.querySelector(".inputPesquisa");

btn.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    const pkmResult = conteudo.value.toLowerCase()

    buscaPkm(pkmResult)
}

function buscaPkm(pkmName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmName}`).then((response) =>
        response.json().then((body) => {
            const img = document.querySelector(".img");
            const pkmName = document.querySelector('.pkmName')

            img.src = body.sprites.other.dream_world.front_default;
            pkmName.innerText = body.name
        })
    );
}


/* 
poke
  .then((resolucao, reject) => {
    return resolucao.json();
  })
  .then((body) => {
    const conteudo = document.querySelector(".inputPesquisa").value;

    const img = document.querySelector('.img')

    img.src = body.sprites.back_default

    console.log(conteudo)

   

    console.log(body.forms)
  });
 */