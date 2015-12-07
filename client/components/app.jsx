App = React.createClass({
  // Using the Meteor provided ReactMeteorData allows us to use the
  // getMeteorData() method which automatically listens to any reactive
  // Meteor data source
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      countState: 0
    }
  },
  getMeteorData() {
    return {
      countReactiveVar: Store.reactiveVar(),
      countSessionVar: Session.get('sessionVar')
    };
  },
  handleIncReactiveVar(){
    AppAction.incOne({ type: 'REACTIVE_VAR', count: this.data.countReactiveVar});
  },
  handleDecReactiveVar(){
    AppAction.decOne({ type: 'REACTIVE_VAR', count: this.data.countReactiveVar});
  },
  handleIncSessionVar(){
    AppAction.incOne({ type: 'SESSION_VAR', count: this.data.countSessionVar});
  },
  handleDecSessionVar(){
    AppAction.decOne({ type: 'SESSION_VAR', count: this.data.countSessionVar});
  },
  handleStateInc(){
    // AppAction.incOne({ type: 'STATE', count: this.state.countState});
    this.setState({countState: this.state.countState + 1});
  },
  handleStateDec(){
    // AppAction.incOne({ type: 'STATE', count: this.state.countState});
    this.setState({countState: this.state.countState - 1});
  },
  render() {
    return (
      <div>
        <h1>Meteor-React-Flux Example</h1>
        <hr />
        <h4>Reactive Variable Driving the Counter</h4>
        <button onClick={this.handleIncReactiveVar}>Increment by 1</button>
        <button onClick={this.handleDecReactiveVar}>Decrement by 1</button>
        <span> {this.data.countReactiveVar} </span>
        <br />
        <br />
        <hr />
        <h4>Session Variable Driving the Counter</h4>
        <button onClick={this.handleIncSessionVar}>Increment by 1</button>
        <button onClick={this.handleDecSessionVar}>Decrement by 1</button>
        <span> {this.data.countSessionVar} </span>
        <br />
        <br />
        <hr />
        <h4>React State Driving the Counter</h4>
        <button onClick={this.handleStateInc}>Increment by 1</button>
        <button onClick={this.handleStateDec}>Decrement by 1</button>
        <span> {this.state.countState} </span>
      </div>
    );
  }
});