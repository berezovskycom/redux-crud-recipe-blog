import { createStore } from 'redux';
import reducer from '../reducers';
import { addNewRecipe } from '../actions';

const store = createStore(reducer);

store.dispatch(addNewRecipe(
	0,
	`Spaghetti`, 
	`This recipe has been handed down from my mother. 
	It is a family favorite and will not be replaced! 
	(Definite husband pleaser!)"`, 
	'medium', 
	85, 
	8, 
	`Combine ground beef, onion, garlic, and 
	green pepper in a large saucepan. Cook and 
	stir until meat is brown and vegetables are tender. 
	Drain grease. Stir diced tomatoes, tomato sauce, 
	and tomato paste into the pan. Season with oregano, 
	basil, salt, and pepper. Simmer spaghetti 
	sauce for 1 hour, stirring occasionally.`,

	`1 pound ground beef 1 onion, 
	chopped 4 cloves garlic, 
	minced 1 small green bell pepper, 
	diced 1 (28 ounce) can diced tomatoes 1 
	(16 ounce) can tomato sauce, 
	1 (6 ounce) can tomato 
	paste 2 teaspoons dried oregano
	2 teaspoons dried basil 1 teaspoon 
	salt 1/2 teaspoon black pepper`
))

console.log(store.getState());

export default store;