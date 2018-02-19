import React from 'react';
import { connect } from 'react-redux';
import FormComponent from '../components/FormComponent';
import store from '../store';

const FormContainer = (state) => (
	<FormComponent store={store} />
)

function mapStateToProps(state) {
	return {
		store
	}
}

export default connect(mapStateToProps)(FormContainer);