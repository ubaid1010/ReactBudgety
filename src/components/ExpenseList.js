import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list-container-expense">
      <p className="list-container-title">EXPENSES</p>
        {this.props.expenses.map((item) => {
          return <ExpenseListItem 
            key={item.id} 
            item={item}
            dispatch={this.props.dispatch}
          />
        })}
      </div>
    )
  }
}

function mapStateToProp(state) {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProp)(ExpenseList);