import React from 'react';
import './ReactAsProp.scss';

export const Contacts = <div className="Contacts">
		Hello Contact
	</div>;

export const Chat =  <div className="Chat"> 
		Hello Chat
	</div>;

class SplitPane extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('', this.props);
		return (
			<div className="SplitPane">
				<div className="SplitPane-left">
					{this.props.left}
				</div>
				<div className="SplitPane-right">
					{this.props.right}
				</div>
			</div>
		);
	}
}
export default SplitPane;

// function App() {
//   return (
//     <SplitPane
//       left={
//         <Chat />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }
