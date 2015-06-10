var React = require('react')

var {
	Component
} = React;

class App extends Component{
	render(){
		return <button>Hello</button>
	}
}

React.render(<App />, document.body)