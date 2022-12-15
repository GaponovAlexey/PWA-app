import { setupCounter } from "./counter.js";

///html
document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id="posts"></div>
  </div>
`;
setupCounter();

window.addEventListener("load", async () => {
  await LoadPost();
});

const LoadPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const cont = document.querySelector("#posts");
  cont.innerHTML = data.map(toCard).join("\n");
};

const toCard = (post) => {
  return `<div class="cards">
      ${post.id} ${post.title}
    </div>`;
};
