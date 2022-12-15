import { setupCounter } from "./counter.js";

window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.register("../sw.js");
    } catch (e) {
      console.log("worker", e);
    }
  }

  await LoadPost();
});

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
