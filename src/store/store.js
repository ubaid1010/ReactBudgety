import { createStore } from 'redux';
import uuidv4 from 'uuid/v4';

//Action generators
export const addIncome = ({ description = '', amount = 0 } = {}) => {
	return {
		type: 'ADD_INCOME',
		data: {
			id: uuidv4(),
			description: description,
			amount: amount
		}
	};
};

export const removeIncome = id => {
	return {
		type: 'REMOVE_INCOME',
		id
	};
};

export const addExpense = ({ description = '', amount = 0 } = {}) => {
	return {
		type: 'ADD_EXPENSE',
		data: {
			id: uuidv4(),
			description: description,
			amount: amount
		}
	};
};

export const removeExpense = id => ({
	type: 'REMOVE_EXPENSE',
	id
});

let localStorageData = JSON.parse(localStorage.getItem('data'));
if (localStorageData === null) {
	localStorageData = {};
}

const incExpReducerDefaultState = {
	income: localStorageData.income ? localStorageData.income : [],
	expenses: localStorageData.expenses ? localStorageData.expenses : []
};

//reducer
const incExpReducer = (state = incExpReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_INCOME':
			return {
				income: [...state.income, action.data],
				expenses: state.expenses
			};
		case 'ADD_EXPENSE':
			return {
				income: state.income,
				expenses: [...state.expenses, action.data]
			};
		case 'REMOVE_INCOME':
			return {
				income: state.income.filter(({ id }) => id !== action.id),
				expenses: state.expenses
			};
		case 'REMOVE_EXPENSE':
			return {
				income: state.income,
				expenses: state.expenses.filter(({ id }) => id !== action.id)
			};
		default:
			return state;
	}
};

const store = createStore(
	incExpReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	const state = store.getState();
	localStorage.setItem('data', JSON.stringify(state));
	console.log(state);
});

// store.dispatch(addIncome({description: 'some desc', amount: 273.5}));
// store.dispatch(addIncome({description: 'some desc', amount: 150}));
// store.dispatch(addExpense({description: 'some desc', amount: 124}));
// store.dispatch(addExpense({description: 'some desc', amount: 35.2}));
export default store;
