import { ADD_NEW_RECIPE } from '../constants';

let nextId = 0;

export const addNewRecipe = (
	id,
	title, 
	desc, 
	difficulty, 
	time, 
	serves,
	directions = [],
	ingredients = []
) => {
	return {
		type: ADD_NEW_RECIPE,
		id: nextId++,
		title,
		desc,
		difficulty,
		time,
		serves,
		directions,
		ingredients
	}
}