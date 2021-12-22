const search = document.querySelector(".form-control");

search.addEventListener("keyup", (e) => {
  let searchText = search.value;
  if (e.keyCode === 13) {
    itemRow.innerText = "";
    const data = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((data) => data.json())
      .then((data) => {
        data.meals.map((item) => {
          const colDiv = document.createElement("div");
          colDiv.classList.add("col-md-4");
          const card = document.createElement("div");
          card.classList.add(
            "card",
            "m-4",
            "border",
            "border-primary",
            "border-3"
          );
          const cardBody = document.createElement("div");
          cardBody.classList.add("overflow-hidden");
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
