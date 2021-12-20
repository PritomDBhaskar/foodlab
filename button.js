let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    const buttonText = button.innerText;
    console.log(typeof buttonText);
    const data = fetch(
      `www.themealdb.com/api/json/v1/1/filter.php?c=${buttonText}`
    )
      .then((data) => data.json())
      .then((data) => {
        data.meals.map((item) => {
          itemRow.innerHTML = "";
          const container = document.querySelector(".container");
          const itemRowNew = document.createElement("div");
          itemRowNew.classList.add("row", "item-row");
          const colDiv = document.createElement("div");
          colDiv.classList.add("col-md-4");
          const card = document.createElement("div");
          card.classList.add("card", "m-4");
          const img = document.createElement("img");
          img.classList.add("card-img-top");
          img.src = item.strMealThumb;
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title", "m-3", "text-center");
          cardTitle.innerText = item.strMeal;
        });
      });
  });
});

// const button = document.querySelector(".button");
// button.addEventListener("click", () => {
//   const data = fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
//   )
//     .then((data) => data.json())
//     .then((data) => {
//       data.meals.map((item) => {
//         console.log(data);
//         const container = document.querySelector(".container");
//         const itemRowNew = document.createElement("div");
//         itemRowNew.classList.add("row", "item-row");
//         const colDiv = document.createElement("div");
//         colDiv.classList.add("col-md-4");
//         const card = document.createElement("div");
//         card.classList.add("card", "m-4");
//         const img = document.createElement("img");
//         img.classList.add("card-img-top");
//         img.src = item.strMealThumb;
//         const cardTitle = document.createElement("h5");
//         cardTitle.classList.add("card-title", "m-3", "text-center");
//         cardTitle.innerText = item.strMeal;
//       });
//     });
// });
