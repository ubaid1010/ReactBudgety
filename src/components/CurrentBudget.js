import React from 'react';
import { connect } from 'react-redux';
import total from '../selectors/total';
import formatNum from '../selectors/formatNum';

class CurrentBudget extends React.Component {
	render() {
		return (
			<div className="grand-total">
				<p>Available amount:</p>
				<p className="current-budget">
					&#8377;
					{formatNum(
						(total(this.props.income) - total(this.props.expenses)).toFixed(2)
					)}
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(CurrentBudget);
