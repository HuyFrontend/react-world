
```js
/*************************/
/****** NOTE *************/
/*************************/

//3. Print json object to html
return (
    <div>
      <span>{JSON.stringify(formErrors)}</span>
    </div>
  )
//2. className, htmlFor instead of for in label
//1. onChange, onBlur, onKeyPress
onBlur = (event) => {
  this.setState({typed: event.target.value});
},

<input type="text" onBlur={this.onBlur} onKeyPress={this.handleEnterKeyPress} />
handleEnterKeyPress: function (e) {
  if(e.which == 13){
    e.target.blur();
  }
  return false;
}

<div>
  <input readOnly value={this.state.value} onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/>
  <button onClick={this.handleClick.bind(this)}>Change Input</button>
</div>
 // ref={(input)=> this.myinput = input} Uncontrolled

/************************/
/****** CLEAN CODE ******/
/************************/
// 1. Clean code is DRY
// Dirty
const MyComponent = () => (
  <div>
    <OtherComponent type="a" className="colorful" foo={123} bar={456} />
    <OtherComponent type="b" className="colorful" foo={123} bar={456} />
  </div>
);
// Clean
const MyOtherComponent = ({ type }) => (
  <OtherComponent type={type} className="colorful" foo={123} bar={456} />
);
const MyComponent = () => (
  <div>
    <MyOtherComponent type="a" />
    <MyOtherComponent type="b" />
  </div>
);
//////////////////////////////////////////
// 2. DRY up this code
// Dirty
import Title from './Title';
export const Thingie = ({ description }) => (
  <div class="thingie">
    <div class="description-wrapper">
      <Description value={description} />
    </div>
  </div>
);
export const ThingieWithTitle = ({ title, description }) => (
  <div>
    <Title value={title} />
    <div class="description-wrapper">
      <Description value={description} />
    </div>
  </div>
);
// Clean
import Title from './Title';
export const Thingie = ({ description, children }) => (
  <div class="thingie">
    {children}
    <div class="description-wrapper">
      <Description value={description} />
    </div>
  </div>
);
export const ThingieWithTitle = ({ title, ...others }) => (
  <Thingie {...others}>
    <Title value={title} />
  </Thingie>
);
/////////////////////////////////////////
// 3. Default values
// Dirty
const Icon = ({ className, onClick }) => {
  const additionalClasses = className || 'icon-large';
  return (
    <span
      className={`icon-hover ${additionalClasses}`}
      onClick={onClick}>
    </span>
  );
};
// Clean
const Icon = ({ className = 'icon-large', onClick }) => (
  <span className={`icon-hover ${className}`} onClick={onClick} />
);
// Cleaner
const Icon = ({ className, onClick }) => (
  <span className={`icon-hover ${className}`} onClick={onClick} />
);
Icon.defaultProps = {
  className: 'icon-large',
};
//////////////////////////////////////////
// 4. Separate stateful aspects from rendering
// Dirty
class User extends Component {
  state = { loading: true };

  render() {
    const { loading, user } = this.state;
    return loading
      ? <div>Loading...</div>
      : <div>
          <div>
            First name: {user.firstName}
          </div>
          <div>
            First name: {user.lastName}
          </div>
          ...
        </div>;
  }

  componentDidMount() {
    fetchUser(this.props.id)
      .then((user) => { this.setState({ loading: false, user })})
  }
}
// Clean
import RenderUser from './RenderUser';
class User extends Component {
  state = { loading: true };

  render() {
    const { loading, user } = this.state;
    return loading ? <Loading /> : <RenderUser user={user} />;
  }

  componentDidMount() {
    fetchUser(this.props.id)
      .then(user => { this.setState({ loading: false, user })})
  }
}
////////////////////////////////////////
// 5. Use stateless functional components
// Dirty
class TableRowWrapper extends Component {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
}
// Clean
const TableRowWrapper = ({ children }) => (
  <tr>
    {children}
  </tr>
);
////////////////////////////////////////
// 6. Rest/spread
// Dirty
const MyComponent = (props) => {
  const others = Object.assign({}, props);
  delete others.className;
  return (
    <div className={props.className}>
      {React.createElement(MyOtherComponent, others)}
    </div>
  );
};
// Clean
const MyComponent = ({ className, ...others }) => (
  <div className={className}>
    <MyOtherComponent {...others} />
  </div>
);
///////////////////////////////////////
// 7. Destructure when applicable
// Dirty
componentWillReceiveProps(newProps) {
  this.setState({
    active: newProps.active
  });
}
// Clean
componentWillReceiveProps({ active }) {
  this.setState({ active });
}
////////////////////////////////////////
/** defaultProps */
class CustomButton extends React.Component {
  // ...
}
CustomButton.defaultProps = {
  color: 'blue'
};
// If props.color is not provided, it will be set by default to 'blue':
render() {
  return <CustomButton /> ; // props.color will be set to blue
}
// If props.color is set to null, it will remain null:
render() {
  return <CustomButton color={null} /> ; // props.color will remain null
}
/** props */
// In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

```
////////////////////////////////////////
The Component Lifecycle
////////////////////////////////////////
I. Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

II. Updating:
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

III. Unmounting
This method is called when a component is being removed from the DOM:
1. componentWillUnmount()

IV. Error Handling
This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
1. componentDidCatch()

V. Other APIs
V1.Each component also provides some other APIs:
1. setState()
2. forceUpdate()
V2. Class Properties
1. defaultProps
2. displayName
V3. Instance Properties
1. props
2. state
//////////////////////////////////////////////////