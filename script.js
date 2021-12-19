const itemRow = document.querySelector(".item-row");
const data = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((data) => data.json())
  .then((data) => {
    data.meals.map((item) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4", "d-flex", "align-items-stretch");
      const card = document.createElement("div");
      card.classList.add("card", "m-4");

      const cardBody = document.createElement("div");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "m-3", "text-center");
      cardTitle.innerText = item.strMeal;

      const cardSubTitle = document.createElement("h6");
      cardSubTitle.classList.add(
        "card-subtitle",
        "m-3",
        "text-muted",
        "text-center"
      );
      cardSubTitle.innerText = item.strCategory;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text", "m-3", "text-center");
      cardText.innerText = item.strInstructions;

      cardBody.append(cardTitle, cardSubTitle, cardText);
      card.appendChild(cardBody);
      colDiv.appendChild(card);
      itemRow.appendChild(colDiv);
    });
  });

const search = document.querySelector(".form-control");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let searchText = search.value;
    console.log(searchText);
    const data = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((data) => data.json())
      .then((data) => {
        data.meals.map((item) => {
          const colDiv = document.createElement("div");
          colDiv.classList.add("col-md-4");
          const card = document.createElement("div");
          card.classList.add("card", "m-4");

          const cardBody = document.createElement("div");

          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title", "m-3", "text-center");
          cardTitle.innerText = item.strMeal;

          const cardSubTitle = document.createElement("h6");
          cardSubTitle.classList.add(
            "card-subtitle",
            "m-3",
            "text-muted",
            "text-center"
          );
          cardSubTitle.innerText = item.strCategory;

          const cardText = document.createElement("p");
          cardText.classList.add("card-text", "m-3", "text-center");
          cardText.innerText = item.strInstructions;

          cardBody.append(cardTitle, cardSubTitle, cardText);
          card.appendChild(cardBody);
          colDiv.appendChild(card);
          itemRow.appendChild(colDiv);
        });
      });
  }
});

const button = document.getElementsByClassName("btn-group");
console.log(button);
button.addEventListener("click", () => {
  const buttonText = button.innerText;
  const data = fetch(
    `www.themealdb.com/api/json/v1/1/filter.php?c=${buttonText}`
  )
    .then((data) => data.json())
    .then((data) => {
      data.meals.map((item) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");
        const card = document.createElement("div");
        card.classList.add("card", "m-4");

        const cardBody = document.createElement("div");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "m-3", "text-center");
        cardTitle.innerText = item.strMeal;

        const cardSubTitle = document.createElement("h6");
        cardSubTitle.classList.add(
          "card-subtitle",
          "m-3",
          "text-muted",
          "text-center"
        );
        cardSubTitle.innerText = item.strCategory;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text", "m-3", "text-center");
        cardText.innerText = item.strInstructions;

        cardBody.append(cardTitle, cardSubTitle, cardText);
        card.appendChild(cardBody);
        colDiv.appendChild(card);
        itemRow.appendChild(colDiv);
      });
    });
});
