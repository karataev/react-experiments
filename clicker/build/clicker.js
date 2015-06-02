

var App = React.createClass({displayName: "App",
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
      React.createElement("div", null, 
        React.createElement("h1", null, "Clicks: ", this.state.clicks), 
        React.createElement("button", {className: "btn btn-primary", onClick: this.clicked}, "Click")
      )
    )
  }
})

React.render(React.createElement(App, null), document.getElementById("mount"));

