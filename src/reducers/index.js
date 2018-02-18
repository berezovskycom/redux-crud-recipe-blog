import { ADD_NEW_RECIPE, DELETE_RECIPE } from '../constants';

const reducer = (state = [], action) => {
	const {
		type, 
		id,
		title, 
		desc, 
		difficulty, 
		time, 
		serves, 
		directions,
		direction, 
		ingredients
	} = action;

	switch(type) {
		case ADD_NEW_RECIPE: 
			return [
				...state,
				{
					id,
					title,
					desc,
					difficulty,
					time,
					serves,
					directions,
					ingredients		
				}
			]
		case DELETE_RECIPE:
			const newState = Object.assign([], state);
      const indexOfRecipe = state.findIndex(recipe => {
        return recipe.id === state.map(objId => objId.id[recipe.id])
      })
      newState.splice(indexOfRecipe, 1);
      return newState
    case 'ADD_DIRECTION':
    	return Object.assign({}, state, {
    		direction
    	})
		default:
			return state	
	}
}

export default reducer