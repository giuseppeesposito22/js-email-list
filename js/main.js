const ulEl = document.getElementById("email-list");

const emailArray = [];
const emailApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

for (let i = 0; i < 10; i++) {
  axios.get(emailApi).then((response) => {
    const email = response.data.response;

    emailArray.push(email);

    if (emailArray.length === 10) {
      for (const email of emailArray) {
        ulEl.innerHTML += `<li class="list-group-item">${email}</li>`;
      }
    }
  });
}
