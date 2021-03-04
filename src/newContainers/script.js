const btn = document.querySelector(".btn");
const conteudo = document.querySelector(".inputPesquisa");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();

  const pkmResult = conteudo.value.toLowerCase();

  buscaPkm(pkmResult);
}

async function buscaPkm(pkmName) {
  try {
    const dadosResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pkmName}`
    );
    const dadosJson = await dadosResponse.json();
    const img = document.querySelector(".img");
    const pkmNames = document.querySelector(".pkmName");

    img.src = dadosJson.sprites.back_default;
    pkmNames.innerText = dadosJson.name;
    console.log(pkmNames);
  } catch {
    const pkmNames = document.querySelector(".pkmName");
    pkmNames.innerText =
      "Esse pkm n existe ainda... volte daqui uns anos vai ver ja tem";
  }
}
