// DOM ELEMENT
const ulEl = document.getElementById("email-list");
const buttonEl = document.getElementById("regenerator-email-button");

// METODO PER GENERARE UNA LISTA RICHIAMANDO UN API
// const generateListApi = (listLength, apiUri) => {
//   let array = [];
//   list = "";

//   for (let i = 0; i < listLength; i++) {
//     axios.get(apiUri).then((response) => {
//       const email = response.data.response;

//       array.push(email);

//       if (array.length === listLength) {
//         for (const element of array) {
//           list += `<li class="list-group-item">${element}</li>`;
//         }
//         ulEl.innerHTML = list;
//       }
//     });

//     array.push(axios.get(apiUri));
//   }

// };

const emailApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

const generateListApi = (listLength, apiUri) => {
  let array = [];

  for (let i = 0; i < listLength; i++) {
    array.push(axios.get(apiUri));
  }

  Promise.all(array).then((response) => {
    const res = response.map((res) => res.data.response);

    const listHtml = res
      .map((el) => `  <li class="list-group-item">${el}</li>`)
      .join("");

    ulEl.innerHTML = listHtml;
  });
};

// Genero la lista nel DOM
generateListApi(10, emailApi);

// Al click del bottone pulisco il nodo HTML e genero una nuova lista
buttonEl.addEventListener("click", function () {
  ulEl.innerHTML = `    <div
      class="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white bg-opacity-50"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;

  generateListApi(10, emailApi);
});
