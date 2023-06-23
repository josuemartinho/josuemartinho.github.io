const repositoriesList = document.querySelector(".projetos-list");

function getRepositories() {
  fetch("https://api.github.com/users/josuemartinho/repos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((repo) => {
        const listItem = document.createElement("li");
        const projectLink = document.createElement("a");
        const title = document.createElement("h2");
        const languagesContainer = document.createElement("div"); // Container para as linguagens
        const readme = document.createElement("p");
        const buttonsDiv = document.createElement("div");
        const repoLink = document.createElement("a");
        const demoLink = document.createElement("a");

        projectLink.href = repo.html_url;
        title.textContent = repo.name;
        readme.textContent = repo.description;
        repoLink.textContent = "repositório";
        repoLink.href = repo.html_url;
        repoLink.classList.add("rep");
        demoLink.textContent = "demonstração";
        demoLink.href = repo.homepage;
        demoLink.classList.add("dem");

        projectLink.appendChild(title);
        listItem.appendChild(projectLink);
        listItem.appendChild(languagesContainer);
        listItem.appendChild(readme);

        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(repoLink);
        buttonsDiv.appendChild(demoLink);
        listItem.appendChild(buttonsDiv);

        repositoriesList.appendChild(listItem);

        // Verificar se o repositório possui linguagens
        if (repo.languages_url) {
          fetch(repo.languages_url)
            .then((response) => response.json())
            .then((languages) => {
              const languagesKeys = Object.keys(languages);
              languagesKeys.forEach((language) => {
                const languageSpan = document.createElement("span");
                languageSpan.textContent = language;
                languageSpan.classList.add("language");
                languagesContainer.appendChild(languageSpan);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getRepositories();
