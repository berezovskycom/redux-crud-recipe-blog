import {ADD_INGREDIENTS} from '../constants';

const ingredients = (state = [], action) => {
	const {type, ingredient, weight, quantity} = action;

	switch(type) {
		case ADD_INGREDIENTS:
			return [
				...state,
				{
					ingredient,
					weight,
					quantity
				}
			]
		default:
			return state	
	}
}

export default ingredients;