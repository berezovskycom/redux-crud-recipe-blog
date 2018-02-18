import React from 'react';
import { store } from '../index';

function handleDelete(e) {
	e.preventDefault()
	store.dispatch({type: 'DELETE_RECIPE', id: RecipeHeader.key })
	console.log(store.getState());
}

const RecipeHeader = (state) => (
	<header className="recipe-component__header">
	 	<h3 className="recipe-component__title">
	 		{state.title}
	 		<a href="" 
	 			className="recipe-component__delete"
	 			onClick={handleDelete}
	 		>
	 			{' '}delete
	 		</a>
	 	</h3>
		<ul className="recipe-component__details">
		 	<li className="recipe-component__detail">
		 		difficulty: {state.difficulty}
		 	</li>
		 	<li className="recipe-component__detail">
		 		time: {state.time} mins
		 	</li>
		 	<li className="recipe-component__detail">
		 		serves: {state.serves}
		 	</li>
	 	</ul>	 	
	</header>
)

export default RecipeHeader;