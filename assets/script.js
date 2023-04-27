// Inital array of recipeData
//var recipeData = [
// {
//     title:"Meat Recipes",
//     description:`Eating a proper diet, based on regular consumption of beef and vegetables, is
//               important at all stages of life. It strengthens the immune system for a better nutritional balance. We
//               must consume foods with proteins and Beef impacts on the maintenance of muscle mass.`,
//     btnLink: "Meat recipe page",
//     image:"assets/pictures/meat2.jpg"
// },
// {
//     title:"Fish Recipes",
//     description:`There are several studies that have suggested that seafood/fish can help protect
//     our lungs, boost night vision, protect the ageing process. it has high omega-3 fatty acis to help
//     keep your eyes healthy and bright are just a couple of reasons you should eat more fish`,
//     btnLink: "Fish recipe page",
//     image: "assets/pictures/istockphoto-1319267869-612x612.jpg"
// },
// {
//     title:"Vegan Recipes",
//     description:`Sweet Simple Vegan is as lovely as its name suggests. Yes! by eating a wide
//     variety of wholesome foods and vegetables, you can get all the nutrients your body needs. Beans,
//     whole grains,
//     vegetables,
//     and fruits are packed with nutrients and many more.`,
//     btnLink: "Vegan recipe page",
//     image: "assets/pictures/vegan2.png"
// }
//];
//
//This.on ("click")function will trigger AJAX call
$("#search-btn").on("click", function (event) {
  event.preventDefault(); //preventdefault to stoppropagation
  var searchInput = $("#search-input").val(); //grab the value  from input field
  console.log(searchInput);
  //
  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=946d18230eb44f9ea9732400786afe4c";
  var cocktailURL = "the-cocktail-db.p.rapidapi.com?apiKey=52ba84ca8dmsh25283fe3edf5356p113f37jsn2a2c34c22856&s=vodka";

  //Make ajax request to recipe API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var recipesList = response.results;
    for (var i = 0; i < recipesList.length; i++) {
      console.log(recipesList[i].title);
      console.log(recipesList[i].image);
      var card = $(`
<div class="row">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${recipesList[i].title}</h5>
      <img src="${recipesList[i].image}" alt="..." width="200" height="200">
      <p class="card-text">
      </p>
      <button>
      <a href="https://api.spoonacular.com/recipes/${recipesList[i].id.summary}/information?apiKey=946d18230eb44f9ea9732400786afe4c" class="btn btn-primary">
      <button />
      </a>
    </div>
  </div>
</div>
`)
  console.log(recipesList[i].id)
    $("#recipe-cards").append(card);
    }
  });
});
//var results = reponse.data;
//for(var i = 0;i < results.length;i++)
//{ //create HTML for current recipe
/* var card = $(`
<div class="row">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${recipe.title}</h5>
      <img src="${recipe.image}" alt="..." width="200" height="200">
      <p class="card-text">
          ${recipe.description}
      </p>
      <a href="#" class="btn btn-primary">
      ${recipe.btnLink}
      </a>
    </div>
  </div>
</div>
`)
// append card to HTML
$("#recipe-cards").append(card)
}
}
//
//call showRecipeCards with real data
showRecipeCards(recipeData);
}); */
//RecipeCards will get dumped here
/* function showRecipeCards(recipeList){
  $("#recipe-cards").empty();//clear the inner html
  for (let i = 0; i < recipeList.length; i++) {
      var recipe = recipeList[i];
      //create HTML for current recipe
      var card = $(`
        <div class="row">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${recipe.title}</h5>
              <img src="${recipe.image}" alt="..." width="200" height="200">
              <p class="card-text">
                  ${recipe.description}
              </p>
              <a href="#" class="btn btn-primary">
              ${recipe.btnLink}
              </a>
            </div>
          </div>
        </div>
      `)
      // append card to HTML
      $("#recipe-cards").append(card)
  }
}*/

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '52ba84ca8dmsh25283fe3edf5356p113f37jsn2a2c34c22856',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

  var cocktailList = response.results;
  for (var i = 0; i < cocktailList.length; i++) {
    console.log(cocktailList[i].title);
    console.log(cocktailList[i].image);
    var card = $(`
<div class="row">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${cocktailList[i].title}</h5>
    <img src="${cocktailList[i].image}" alt="..." width="200" height="200">
    <p class="card-text">
    </p>
    <button>
    <a href="the-cocktail-db.p.rapidapi.com/${cocktailList[i].id.summary}?apiKey=52ba84ca8dmsh25283fe3edf5356p113f37jsn2a2c34c22856&s=vodka">
    <button />
    </a>
  </div>
</div>
</div>
`)
console.log(cocktailList[i].id)
  $("#recipe-cards").append(card);
  }
