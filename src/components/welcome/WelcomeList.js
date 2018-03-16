import React from 'react';
import Welcom from './Welcome';

class WelcomeList extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const className = this.props.className;
        const people = this.props.people;
        const listItems = people.map((person) =>
            // <ListItem key={number.toString()} value={number} />
            <Welcom name={person.name} age={person.age} phone={person.phone}/>

        );
        return (
            <div className={` ${className}`}>
                {listItems}
            </div>
        )
    }
};

WelcomeList.defaultProps = {
    defaultClassName: 'defaultClassName',
    people: [{name: 'Huy', age: 20, phone: '017 123 456'}, {name: 'Hoang', age: 19, phone: '018 123000'}]
};

export default WelcomeList;