import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

// export const mapStateToProps = (state) => {
//     return {
//         register: state.register,
//         home: state.home,
//         about: state.about,
//         contact:state.contact
//     }
// }

// export default combineReducers({
//     todos,
//     counter
// });

// or
// export default combineReducers({
//     todo: todos,
//     count: counter
// });

const assignReducers = Object.assign({}, todos, counter);
const rootReducer = combineReducers(assignReducers);

export default assignReducers;

// export default rootReducer;