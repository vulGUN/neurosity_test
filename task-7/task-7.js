export default function task7() {
  const wrapper = document.querySelector(".task-7__wrapper");

  const randomNumber = Math.floor(Math.random() * (100 - 10 + 1) + 10);

  function generateElements() {
    for (let i = 0; i <= randomNumber; i++) {
      const element = document.createElement("div");
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      element.classList.add("task-7__square");
      element.style.backgroundColor = randomColor;
      wrapper.appendChild(element);
    }
  }

  generateElements();
}
