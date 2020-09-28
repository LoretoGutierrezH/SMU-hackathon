import data from '../../../data/recipes.json';

async function stall (stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
} 

export async function getRecipe (id) {
  await stall();
  const recipes = data.recipes;
  const recipe = recipes.find((recipe) => {
    if (recipe.id === id){
      return true;
    }
    else{
      return false;
    }
  });
  return recipe;
}