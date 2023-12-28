export default function task6() {
  const name = document.querySelector("#input-name");
  const nameLabel = document.querySelector("#name-label");
  const phone = document.querySelector("#input-tel");
  const phoneLabel = document.querySelector("#tel-label");
  const password = document.querySelector("#input-password");
  const passwordLabel = document.querySelector("#password-label");
  const password2 = document.querySelector("#input-password2");
  const passwordLabel2 = document.querySelector("#password-label2");

  name.oninput = (e) => {
    const { value } = e.target;

    if (value.length < 3 || value.length > 30) {
      nameLabel.innerText = "Имя должно быть от 3 до 30 символов";
      name.classList.add("input-error");
    } else if (!!value.match(/[0-9!@#$%^&_*\-+=\[\]{}()?.\/]/g)) {
      nameLabel.innerText = "Имя должно содержать только кириллицу/латиницу";
      name.classList.add("input-error");
    } else {
      nameLabel.innerText = "";
      name.classList.remove("input-error");
    }
  };

  phone.oninput = (e) => {
    const { value } = e.target;

    if (value.length < 10 || value.length > 15) {
      phoneLabel.innerText = "Телефон должен содержать от 10 до 15 цифр";
      phone.classList.add("input-error");
    } else if (!!value.match(/[a-zа-я!@#$%^&_*\-=\[\]{}()?.\/]/gi)) {
      phoneLabel.innerText = "Телефон должен состоять только из цифр (допускается знак '+')";
      phone.classList.add("input-error");
    } else {
      phoneLabel.innerText = "";
      phone.classList.remove("input-error");
    }
  };

  password.oninput = (e) => {
    const { value } = e.target;

    if (value.length < 8 || value.length > 40) {
      passwordLabel.innerText = "Пароль должен содержать от 8 до 40 символов";
      password.classList.add("input-error");
    } else if (!value.match(/[А-ЯA-Z]/g)) {
      passwordLabel.innerText = "Пароль должен содержать хотя бы 1 заглавную букву";
      password.classList.add("input-error");
    } else if (!value.match(/[0-9]/g)) {
      passwordLabel.innerText = "Пароль должен содержать хотя бы 1 цифру";
      password.classList.add("input-error");
    } else {
      passwordLabel.innerText = "";
      password.classList.remove("input-error");
    }
  };

  password2.oninput = (e) => {
    const { value } = e.target;

    if (password.value !== value) {
      passwordLabel2.innerText = "Пароли не совпадают";
      password2.classList.add("input-error");
    } else {
      passwordLabel2.innerText = "";
      password2.classList.remove("input-error");
    }
  };
}
