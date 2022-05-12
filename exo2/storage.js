function saveResult(res) {
  localStorage.setItem("result", JSON.stringify(res));
}

function getResult() {
  return JSON.parse(localStorage.getItem("result"));
}
