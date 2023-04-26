$(document).ready(() => {
    const appId = 'f9543b33';
    const appKey = '7c904f657d73a58475a4fecee006a9e4';
    const resultsDiv = $('#results');
  
    const getMeatRecipes = async () => {
      const response = await axios.get(`https://api.edamam.com/search?q=meat&app_id=${appId}&app_key=${appKey}`);
      const recipes = response.data.hits;
      resultsDiv.empty();
      recipes.forEach(recipe => {
        const recipeDiv = $('<div class="card m-3" style="width: 18rem;"></div>');
        recipeDiv.html(`
          <img class="card-img-top" src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
          <div class="card-body">
            <h5 class="card-title">${recipe.recipe.label}</h5>
            <p class="card-text">Calories: ${recipe.recipe.calories.toFixed(2)}</p>
            <ul class="list-group list-group-flush">
              ${recipe.recipe.ingredientLines.map(ingredient => `<li class="list-group-item">${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank" class="btn btn-primary mt-3">View Recipe</a>
          </div>
        `);
        resultsDiv.append(recipeDiv);
      });
    };

    getMeatRecipes();
  });