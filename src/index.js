fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    const app = document.querySelector("#app");
    const div = document.createElement("div");
    div.classList = "wrapper-characters";
    const characters = data.results
      .map((character) => {
        return `<div class="character">
        <h2>${character.name}</h2>
        <img src="${character.image}" width="200" height="200" />
      </div>`;
      })
      .join("");
    div.innerHTML = characters;
    app.appendChild(div);
  });
