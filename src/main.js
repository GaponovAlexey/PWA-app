import { setupCounter } from "./counter.js";



window.addEventListener('load', async () => {
  await LoadPost()
})


const LoadPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()

  const cont = document.querySelector("#posts")
  cont.innerHTML = data.map()
}





///html
document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="posts"></div>
  </div>
`;
setupCounter();
