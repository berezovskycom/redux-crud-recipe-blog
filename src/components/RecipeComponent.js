import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RecipeComponent.css';
import RecipeHeader from './RecipeHeader';
import RecipeMain from './RecipeMain';

const RecipeComponent = (props) => (
	<div>{
		props.recipes.map((props, id = 0) => (
			<div key={id++} className="recipe-component">
				<RecipeHeader
					title={props.title}
					difficulty={props.difficulty}
					serves={props.serves}
					time={props.time}
				/>	
					<RecipeMain
						desc={props.desc}
						directions={props.directions}
						ingredients={props.ingredients}
					/>
		 	</div>
		 ))
	}</div>
)

RecipeComponent.propTypes = {
	title: PropTypes.string,
	difficulty: PropTypes.string,
	serves: PropTypes.number,
	time: PropTypes.number,
	desc: PropTypes.string,
	directions: PropTypes.string,
	ingredients: PropTypes.string
}

export default RecipeComponent;
