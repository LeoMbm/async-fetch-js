// VARIABLES

const input = document.querySelector("#search-bar");
const btn = document.querySelector("button");

// LISTENERS
btn.addEventListener("click", sendSearch);

// FONCTION
function sendSearch(e) {
  e.preventDefault();
  const value = input.value;
  const fetchInput = (name) => fetch("https://api.agify.io/?name=" + name);

  fetchInput(value)
    .then((res) => res.json())
    .then((data) => {
      const div = document.createElement("div");
      div.className = "result-search " + data.name;
      const resultName = document.createElement("p");
      const resultAge = document.createElement("p");
      const resultCount = document.createElement("p");
      resultName.innerHTML = "Name: " + data.name;
      resultAge.innerHTML = "Age: " + data.age;
      resultCount.innerHTML = "Count: " + data.count;

      document.body.appendChild(div);
      div.appendChild(resultName);
      div.appendChild(resultAge);
      div.appendChild(resultCount);
    });
}
