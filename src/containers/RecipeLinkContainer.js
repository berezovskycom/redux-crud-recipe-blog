import React from 'react';
import { connect } from 'react-redux';
import RecipeLink from '../components/RecipeLink';

const RecipeLinkContainer = (state) => (
	<RecipeLink recipes={state} {...state}/>
)

function mapStateToProps(state) {
	return {
		recipes: state
	}
}

export default connect(mapStateToProps)(RecipeLinkContainer); 