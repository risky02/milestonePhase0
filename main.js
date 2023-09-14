// selectors
const btnSearch = document.getElementById(`btnSearch`);
const search = document.getElementsByName(`keyword`)[0];
const data = document.getElementsByClassName(`card-title`)[0];

// event
btnSearch.addEventListener(`click`, (event) => {
  searchData();
});

function searchData() {
  const searchValue = search.value.toLocaleLowerCase();
  const dataFiltered = data.slice(0);

  data_section.innerHTML = "";
  for (let i = 0; i < dataFiltered.length; i++) {
    if (dataFiltered[1].toLocaleLowerCase().includes(searchValue)) {
      data_section = data_section.innerHTML += `<h5 class="card-title">${dataFiltered[1]}</h5>`;
    }
  }
}
