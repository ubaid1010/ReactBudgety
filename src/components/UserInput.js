import React from 'react';
import { addIncome, addExpense } from '../store/store';
import { connect } from 'react-redux';

class UserInput extends React.Component {
	constructor(props) {
		super(props);
		this.addData = this.addData.bind(this);
	}

	addData(e) {
		e.preventDefault();
		const type = e.target.elements.type.value;
		const amount = e.target.elements.amount.value
			? e.target.elements.amount.value
			: 0;
		const data = {
			description: e.target.elements.description.value,
			amount: parseFloat(amount).toFixed(2)
		};
		if (type === 'income' && data.description && data.amount) {
			this.props.dispatch(addIncome(data));
		} else if (type === 'expense' && data.description && data.amount) {
			this.props.dispatch(addExpense(data));
		}
		e.target.elements.description.value = '';
		e.target.elements.amount.value = '';
	}

	render() {
		return (
			<div className="form">
				<form onSubmit={this.addData}>
					<select name="type" id="input-type" name="type">
						<option value="income">Add Income</option>
						<option value="expense">Add Expense</option>
					</select>
					<input type="text" placeholder="decription..." name="description" />
					<input
						type="number"
						placeholder="amount..."
						name="amount"
						step="any"
						min="0"
					/>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(UserInput);
