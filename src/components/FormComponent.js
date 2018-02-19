import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNewRecipe } from '../actions';
import '../styles/FormComponent.css';

class FormComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		let i = 0;
		e.preventDefault();
		if(!this.inputTitle.value.trim() && !this.inputDesc.value.trim()) {
			return 
		}
		this.props.store.dispatch(addNewRecipe(
			i++,
			this.inputTitle.value, 
			this.inputDesc.value,
			this.inputDiff.value,
			this.inputServes.value,
			this.inputTime.value,
			this.inputDirections.value,		
			this.inputIngredients.value
		))
		this.inputTitle.value = this.inputDesc.value = 
		this.inputDiff.value = this.inputServes.value = 
		this.inputTime.value = this.inputDirections.value = 
		this.inputIngredients.value = ''
		console.log(this.props.store.getState())
	}

	render() {
		let input;
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<h5>Create your recipe:</h5>
				<input 
					type="text" 
					placeholder="Title"
					className="form__input-title"
					ref={(input) => {this.inputTitle = input}}
				/>
				<div className="form__difficulty">
					Difficulty{' '}
			  	<select ref={(input) => {this.inputDiff = input}}>
			    	<option value="easy">easy</option>
			    	<option value="medium">medium</option>
			    	<option value="hard">hard</option>
			    </select>  
			  </div>
			  <div className="form__number-wrapper">
					<input 
						type="number" 
						placeholder="Serves"
						min="1"
						className="form__serves"
						ref={(input) => {this.inputServes = input}}
					/>
				  	<input 
				  		type="number" 
				  		placeholder="Time (mins)"
							min="1"
							className="form__time"				  		
				  		ref={(input) => {this.inputTime = input}}
				  	/>
				</div>
				<textarea 
					placeholder="Tell us more about the dish!" 
					ref={(input) => {this.inputDesc = input}}
				/>
				<textarea
					placeholder="Add directions"
					ref={input => this.inputDirections = input}
				/>
				<textarea
					placeholder="Add ingredients"
					ref={input => this.inputIngredients = input}
				/>	
				<button type="submit" className="form__submit">Post</button>
			</form>
		)
	}
}

FormComponent.propTypes = {
	store: PropTypes.object.isRequired
}

export default FormComponent;