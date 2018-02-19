import React from 'react';
import PropTypes from 'prop-types';
import { DELETE_RECIPE } from '../constants';
import store from '../store';

function handleDelete(e) {
	e.preventDefault()
	store.dispatch({type: DELETE_RECIPE, id: RecipeHeader.key })
	console.log(store.getState());
}

const RecipeHeader = (props) => (
	<header className="recipe-component__header">
	 	<h3 className="recipe-component__title">
	 		{props.title}
	 		<a href="" 
	 			className="recipe-component__delete"
	 			onClick={handleDelete}
	 		>
	 			{' '}delete
	 		</a>
	 	</h3>
		<ul className="recipe-component__details">
		 	<li className="recipe-component__detail">
		 		difficulty: {props.difficulty}
		 	</li>
		 	<li className="recipe-component__detail">
		 		time: {props.time} mins
		 	</li>
		 	<li className="recipe-component__detail">
		 		serves: {props.serves}
		 	</li>
	 	</ul>	 	
	</header>
)

RecipeHeader.propTypes = {
	title: PropTypes.string.isRequired,
	difficulty: PropTypes.string,
	time: PropTypes.number,
	serves: PropTypes.number
}

export default RecipeHeader;