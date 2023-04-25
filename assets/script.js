// Inital array of recipeData
var recipeData = [
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
]
//This.on ("click")function will trigger AJAX call 
$("#search-btn").on("click" ,function(event){
 event.preventDefault(); //preventdefault to stoppropagation 
 var searchInput = $("#search-input").val(); //grab the value  from input field
 console.log(searchInput);

 var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=946d18230eb44f9ea9732400786afe4c";

 //Make ajax request to recipe API

 $.ajax({
  url: queryURL,
  method: "GET"
 }).then(function(response){
  console.log(response);
 });
//  $.ajax({
//   url:queryURL,
//   method:"GET"
//   }).then(function(response){
//   console.log(response);
//   $("recipe-cards")
//   })

 //call showRecipeCards with real data
 showRecipeCards(recipeData); 
});

 
//RecipeCards will get dumped here
function showRecipeCards(recipeList){
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
}