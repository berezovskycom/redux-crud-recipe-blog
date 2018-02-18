import {ADD_DIRECTIONS, TOGGLE_DIRECTIONS} from '../constants';

const directions = (state = [], action) => {
	const {type, direction, id, completed} = action;
	switch(type) {
		case ADD_DIRECTIONS:
			return [
				...state,
				{
					id,
					direction,
					completed
				}
			]
		case TOGGLE_DIRECTIONS:
			return state.map(direction =>
        (direction.id === id) 
          ? {...direction, completed: !direction.completed}
          : direction
      )
		default:
			return state	
	}
}

export default directions;