import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();
const applyMidle = applyMiddleware(thunkMiddleware, loggerMiddleware);
const composeDev = composeWithDevTools(applyMidle);

/** redux debug with dev tools */
export default function configureStore(preloadedState) {
	return createStore(
		rootReducer, 
		preloadedState,
		// applyMidle, // use this for production
		composeDev // use this for debug
	)
}