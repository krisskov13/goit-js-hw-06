const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (!data.email || !data.password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(data);
    loginForm.reset();
  }
});
