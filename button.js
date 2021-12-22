let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    itemRow.innerHTML = "";
    const data = fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${buttonText}`
    )
      .then((data) => data.json())
      .then((data) => {
        data.meals.map((item) => {
          console.log(item);
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
          const cardImg = document.createElement("img");
          cardImg.classList.add("card-img-top");
          cardImg.src = item.strMealThumb;
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title", "m-3", "text-center");
          cardTitle.innerText = item.strMeal;

          cardBody.append(cardImg, cardTitle);
          card.appendChild(cardBody);
          colDiv.appendChild(card);
          itemRow.appendChild(colDiv);
        });
      });
  });
});

const allButton = document.querySelector(".all");
allButton.addEventListener("click", () => {
  meals();
});
