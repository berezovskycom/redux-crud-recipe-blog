import React, {Component} from 'react';
import PropTypes from 'prop-types';

class	RecipeMain extends Component {

	constructor(props) {
		super(props);
		this.state = {toggle: false};
		this.toggler = this.toggler.bind(this);
	} 

	toggler() {
		this.setState(prev => ({
			toggle: !prev.toggle
		}))
	}

	render() {
		return (
		<div className="recipe-component__main">
			<aside className="recipe-component__desc">
				<h5>Description:</h5>
				{this.props.desc}
			</aside>
			<section className="recipe-component__section">
				<div className="recipe-component__toggle">
					<button className="recipe-component__toggle-btn" onClick={this.toggler}>
						Switch to {this.state.toggle ? 'Ingredients' : 'Directions'}
					</button>
				</div>
				<div className="recipe-component__swap-result">
					<div>{this.state.toggle ? this.props.directions : this.props.ingredients}</div>
				</div>
			</section>
		</div>
		)
	}
}

RecipeMain.propTypes = {
	desc: PropTypes.string,
	directions: PropTypes.string,
	ingredients: PropTypes.string
}

export default RecipeMain;