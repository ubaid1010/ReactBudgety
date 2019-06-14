import React from 'react';
import { connect } from 'react-redux';
import total from '../selectors/total.js';
import formatNum from '../selectors/formatNum.js';

class IncExpSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="summary">
        <div className="income-summary">
          <p className="income-summary-text">Income: </p>
          <p className="income-summary-value">&#8377; {formatNum(this.props.totalIncome.toFixed(2))}</p>
        </div>
        <div className="expense-summary">
          <p className="expense-summary-text">Expense: </p>
          <p className="expense-summary-value">&#8377; {formatNum(this.props.totalExpense.toFixed(2))}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProp(state) {
  return {
    totalIncome: total(state.income),
    totalExpense: total(state.expenses)
  }
}

export default connect(mapStateToProp)(IncExpSummary);
