import React from 'react'
import { removeIncome } from '../store/store';
import formatNum from '../selectors/formatNum';

class IncomeListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="income-list-item">
        <p className="income-list-item-desc">{this.props.item.description}</p>
        <div className="income-list-item-bottom">
          <p className="income-list-item-amt">
          &#8377; {formatNum(this.props.item.amount)}
          </p>
          <button onClick={() => this.props.dispatch(removeIncome(this.props.item.id))}>
            &#215;
          </button>
        </div>
      </div>
    )
  }
}

export default IncomeListItem;