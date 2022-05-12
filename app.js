console.log("hello");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

// FETCH AVEC BECODE.JSON

fetch("becode.json")
  .then(function (result) {
    // console.log(result);
    return result.json();
  })
  .then(function (data) {
    // console.log(data);
    function displayRules() {
      data.forEach((elem) => {
        const list = document.createElement("li");

        list.innerHTML = elem;
        ul.appendChild(list);
        console.log(elem);
      });
    }
    button.addEventListener("click", displayRules);
    return data;
  });
