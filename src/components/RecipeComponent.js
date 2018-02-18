import React from 'react';
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

export default RecipeComponent;
