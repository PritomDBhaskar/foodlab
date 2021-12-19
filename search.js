const search = document.querySelector(".form-control");

search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && search.value !== "") {
    let searchText = search.value;
    if (searchText !== "") {
      console.log("false");
    }
    const data = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((data) => data.json())
      .then((data) => {
        data.meals.map((item) => {
          itemRow.style.display = "none";
          const container = document.querySelector(".container");
          const itemRowNew = document.createElement("div");
          itemRowNew.classList.add("row", "item-row");
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
          itemRowNew.appendChild(colDiv);
          container.appendChild(itemRowNew);
        });
      });
  }
  if (e.keyCode === 13 && search.value === "") {
    if (search.value === "") {
      console.log(typeof search.value);
      console.log("true");
    }
    const itemRow = document.querySelector(".item-row");
    meals();
  }
});
