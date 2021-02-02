import React, {Component} from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    // alert(this.state.message);
    this.setState({
      message: e.target.value
    }
    )
  }

  handleClick(){
    this.setState({
      message: ''
    })
  }
  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="type anything"
          value={this.state.message}
          onChange={this.handleChange
          }
        />
        <button onClick={this.handleClick}>Clear</button>
      </div>
    );
  }
}

export default EventPractice;