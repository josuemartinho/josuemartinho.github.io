fetch("https://api.github.com/users/josuemartinho/repos")
  .then((response) => response.json())
  .then((data) => {
    // Manipule os dados obtidos aqui
    console.log(data);
  })
  .catch((error) => {
    // Trate qualquer erro que ocorra durante a requisição
    console.log(error);
  });
