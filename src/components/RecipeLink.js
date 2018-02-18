import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer';

class RecipeLink extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		return <RecipeContainer/>
	}

	render() {
		return (
			<div>{
				this.props.recipes.map((props, id = 0) => (
				<a href="/" className="link" key={id++} onClick={this.handleClick}>
					<h3 className="link__title">{props.title}</h3>
					<ul className="link__list">
						<li className="link__info">{props.difficulty}</li>
						<li className="link__info">{props.time}min</li>
					</ul>
					<p className="link__desc">{props.desc}</p>
				</a>
				))
			}</div>
		)
	}

}


export default RecipeLink;