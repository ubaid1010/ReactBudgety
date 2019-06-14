import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import CurrentBudget from './components/CurrentBudget';
import IncExpSummary from './components/IncExpSummary';
import UserInput from './components/UserInput';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import './styles/styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}> 
				<div className="root">
					<h2 id="title">React.js Budget App</h2>
					<CurrentBudget />
					<IncExpSummary />
					<UserInput />
					<div className="list-container">
						<IncomeList />
						<ExpenseList />
					</div>
				</div>
			</Provider>
			
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));