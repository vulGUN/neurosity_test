export default function task2() {
  const circle = document.querySelector(".task-2__circle");
  const rectangle = document.querySelector(".task-2__rectangle");
  const triangle = document.querySelector(".task-2__triangle");
  const square = document.querySelector(".task-2__square");

  circle.addEventListener("click", () => {
    circle.classList.toggle("animation-pulse");
  });

  rectangle.addEventListener("click", () => {
    rectangle.classList.toggle("animation-rotate");
  });

  triangle.onclick = () => triangle.classList.toggle("animation-move");
  square.onclick = () => square.classList.toggle("animation-skew");
}
