const but1 = document.querySelector("#btn-1");
if (but1) {
  but1.addEventListener("click", () => {
    console.log("ahhh");
    window.location.href = "index.html";
  });

  but1.addEventListener("mouseenter", () => {
    but1.style.background = "white";
  });

  but1.addEventListener("mouseleave", () => {
    but1.style.background = "white";
  });
}

const but2 = document.querySelector("#btn-2");
if (but2) {
  but2.addEventListener("click", () => {
    console.log("ahh");
    window.location.href = "page2.html";
  });

  but2.addEventListener("mouseenter", () => {
    but2.style.background = "white";
  });

  but2.addEventListener("mouseleave", () => {
    but2.style.background = "white";
  });
}

const but3 = document.querySelector("#btn-3");
if (but3) {
  but3.addEventListener("click", () => {
    console.log("ah");
    window.location.href = "page3.html";
  });

  but3.addEventListener("mouseenter", () => {
    but3.style.background = "white";
  });

  but3.addEventListener("mouseleave", () => {
    but3.style.background = "white";
  });
}

const Shinji = document.querySelector("#Name");

fetch("./data/anime.json")
  .then((response) => response.text())
  .then((text) => {
    const animes = JSON.parse(text);
    animes.forEach((Anime) => {
      const div = document.createElement("div");

      const img = document.createElement("img");
      const text = document.createElement("p");
      const charactor = document.createElement("p");

      img.classList.add("Fav-anime-img");
      div.classList.add("GGG")

      img.src = Anime["img"];
      text.textContent = Anime["Name"];
      charactor.textContent = Anime["Favcharactor"];
      div.append(img);
      div.append(text);
      div.append(charactor);
      Shinji.append(div);
    });
  });
