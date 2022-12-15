// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

export const setupCounter = () => {
  const el = document.querySelector('#counter')
  let c = 0;
  const set = (co) => {
    c = co;
    el.innerHTML = `count = ${c}`;
  };
  el.addEventListener("click", () => {
    set(c + 1);
  });
  set(0);
};
