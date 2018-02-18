import { createStore } from 'redux';
import reducer from '../reducers';
import {
	addGeneralInfo, 
	addNewRecipe
} from '../actions';

 const store = createStore(reducer);

store.dispatch(addGeneralInfo(
	'chicken soup', 
	'traditional thai food',
	'easy',
	15,
	2
));

store.dispatch(addGeneralInfo(
	'chocolade cake', 
	'your fav.',
	'hard',
	120,
	8
));

// store.dispatch(addIngredients('chicken', 1000, 1));
// store.dispatch(addIngredients('chocolade', 250, 1));
// store.dispatch(addDirections('Get chicken'));
// store.dispatch(addDirections('Cook chicken'));
// store.dispatch(addDirections('Eat chicken'));
// store.dispatch(toggleDirections(1));

store.dispatch(addNewRecipe(
	'Chicken Soup', 
	'Great Supper', 
	'easy', 
	15, 
	2, 
	[
		{
			step: 1,
			direction: 'Buy Chicken'
		},
		{
			step: 2,
			direction: 'Eat Chicken'
		}
	],
	[
		{
			ingredient: 'Chicken',
			weight: '1kg',
			quantity: 1
		}
	]))

store.dispatch(addNewRecipe(
	'Burger', 
	'The worst dinner', 
	'medium', 
	15, 
	2, 
	[
		{
			step: 1,
			direction: 'Buy Chicken'
		},
		{
			step: 2,
			direction: 'Eat Chicken'
		}
	],
	[
		{
			ingredient: 'Chicken',
			weight: '1kg',
			quantity: 1
		}
	]))

store.dispatch({
	type: 'ADD_TITLE', 
	title: 'New Chicken Soup'
});

console.log(store.getState());