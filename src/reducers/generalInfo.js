import {
	ADD_GENERAL_INFO
} from '../constants';

const generalInfo = (state = [], action) => {
	
	const {
		type,
		title,
		desc,
		difficulty,
		time,
		serves,
		id
	} = action;

	switch(type) {
		case ADD_GENERAL_INFO:
			return [
				...state,
				{
					title,
					desc,
					difficulty,
					time,
					serves,
					id
				}
			]
		default:
			return state	
	}

}

export default generalInfo;