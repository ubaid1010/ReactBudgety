import React from 'react';
import { removeExpense } from '../store/store';
import formatNum from '../selectors/formatNum';

class ExpenseListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expense-list-item">
        <p className="expense-list-item-desc">{this.props.item.description}</p>
        <div className="expense-list-item-bottom">
          <p className="expense-list-item-amt">
            &#8377; {formatNum(this.props.item.amount)}
          </p>
          <button onClick={() => this.props.dispatch(removeExpense(this.props.item.id))}>&#215;</button>
        </div>
        
      </div>
    )
  }
}

export default ExpenseListItem;