import React from 'react'
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';

class IncomeList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list-container-income">
      <p className="list-container-title">INCOME</p>
        {this.props.income.map((item) => {
          return <IncomeListItem
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
    income: state.income,
    
  }
}

export default connect(mapStateToProp)(IncomeList);
