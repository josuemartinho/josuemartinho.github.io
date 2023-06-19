const theTitle = document.querySelector(".introduce-text h1");

function writingMachine(element) {
  const someText = element.innerHTML.split("");
  element.innerHTML = "";
  someText.forEach((letter, index) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 150 * index);
  });
}
writingMachine(theTitle);
