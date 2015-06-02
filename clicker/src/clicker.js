

var App = React.createClass({
  getInitialState: function () {
    return {
      clicks:0
    }
  },
  clicked: function () {
    this.setState({
      clicks:this.state.clicks + 1
    })

  },
  render: function () {
    return (
      <div>
        <h1>Clicks: {this.state.clicks}</h1>
        <button className="btn btn-primary" onClick={this.clicked}>Click</button>
      </div>
    )
  }
})

React.render(<App />, document.getElementById("mount"));

