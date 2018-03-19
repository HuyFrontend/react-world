// import Redux, { createStore } from 'redux';
// import React, { Component } from 'react';
// // Redux
// import Counter1 from './Counter';

// let reducer = (state = { count: 10 }, action) => {
// 	console.log('step 2 in redux');
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return {
// 				count: state.count + 1
// 			};
// 		case 'DECREMENT':
// 			return {
// 				count: state.count - 1
// 			};
// 		default:
// 			return state;
// 	}
// };
// /* eslint-disable no-underscore-dangle */
// const counterStore = createStore(
// 	reducer, /* preloadedState, */
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// /* eslint-enable */

// class CounterContainer extends Component {
// 	render() {
// 		return (
// 			<div>
// 				{/* <Counter1 store={counterStore}/> */}
// 			</div>
// 		)
// 	}
// }
// export default CounterContainer;