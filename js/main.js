// DOM ELEMENT
const ulEl = document.getElementById("email-list");
const buttonEl = document.getElementById("regenerator-email-button");

// METODO PER GENERARE UNA LISTA RICHIAMANDO UN API
const generateListApi = (listLength, apiUri) => {
  let array = [];
  list = "";

  for (let i = 0; i < listLength; i++) {
    axios.get(apiUri).then((response) => {
      const email = response.data.response;

      array.push(email);

      if (array.length === listLength) {
        for (const element of array) {
          list += `<li class="list-group-item">${element}</li>`;
        }
        ulEl.innerHTML = list;
      }
    });
  }
};

const emailApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

// Genero la lista nel DOM
generateListApi(10, emailApi);

// Al click del bottone pulisco il nodo HTML e genero una nuova lista
buttonEl.addEventListener("click", function () {
  ulEl.innerHTML = "";

  generateListApi(10, emailApi);
});
