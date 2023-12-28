export default function task4() {
  const prevBtn = document.querySelector(".task-4__prev-btn");
  const nextBtn = document.querySelector(".task-4__next-btn");
  const pageNum = document.querySelector(".task-4__page");
  let cards = document.querySelector(".task-4__cards");
  let page = 1;

  async function getData() {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      return await response.json();
    } catch (error) {
      const element = document.createElement("div");
      element.innerText = "Ошибка при загрузке, попробуйте перезагрузить страницу";
      cards.append(element);
      console.error(error);
    }
  }

  async function generateCards() {
    const response = await getData();
    const { data } = response;

    const newCards = document.createElement("div");
    newCards.classList.add("task-4__cards");

    for (let i = 0; i < data.length; i++) {
      const item = document.createElement("div");
      item.classList.add("task-4__item");

      const itemText = document.createElement("div");
      itemText.classList.add("task-4__item-text");

      const avatar = document.createElement("img");
      avatar.src = data[i].avatar;

      const name = document.createElement("div");
      name.innerText = `${data[i].first_name} ${data[i].last_name}`;

      const email = document.createElement("div");
      email.innerText = data[i].email;

      itemText.append(name, email);
      item.append(avatar, itemText);
      newCards.appendChild(item);
    }

    cards.parentNode.replaceChild(newCards, cards);
    cards = newCards;
  }
  generateCards();

  function nextPage() {
    if (page < 2) {
      page = 2;
      pageNum.innerText = page;
      generateCards();
    }
  }

  function prevPage() {
    if (page > 1) {
      page = 1;
      pageNum.innerText = page;
      generateCards();
    }
  }

  prevBtn.onclick = () => prevPage();
  nextBtn.onclick = () => nextPage();
}
