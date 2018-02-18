import React from 'react';
import { connect } from 'react-redux';
import RecipeComponent from '../components/RecipeComponent';

const RecipeContainer = (state) => {
	return (
		<div>
			<RecipeComponent recipes={state} {...state}/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		recipes: state
	}
}

export default connect(mapStateToProps)(RecipeContainer);
