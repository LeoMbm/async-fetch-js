// VARIABLES

const input = document.querySelector("#search-bar");
const btn = document.querySelector("button");
const select = document.querySelector("select");
const options = document.querySelector("option");

// LISTENERS
btn.addEventListener("click", sendSearch);

// FONCTION
function sendSearch(e) {
  e.preventDefault();
  const value = input.value;
  const country = select.value;
  const fetchInput = (name, country) =>
    fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

  fetchInput(value, country)
    .then((res) => res.json())
    .then((data) => {
      const div = document.createElement("div");
      div.className = "result-search " + data.name;
      const resultName = document.createElement("p");
      const resultAge = document.createElement("p");
      const resultCount = document.createElement("p");
      const resultCountry = document.createElement("p");
      resultName.innerHTML = "Name: " + data.name;
      resultAge.innerHTML = "Age: " + data.age;
      resultCount.innerHTML = "Count: " + data.count;
      resultCountry.innerHTML = "Country: " + data.country_id;

      document.body.appendChild(div);
      div.appendChild(resultName);
      div.appendChild(resultAge);
      div.appendChild(resultCount);
      div.appendChild(resultCountry);
    });
}
