import React, { Component } from 'react';
class NewBoxForm extends Component {

  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state }
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" })
  }
  
  render() {
     const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
    return (
      <form  onSubmit={this.handleSubmit} >
        <div style={{ padding: "50px",width:"900px"}}>
          <label style={{ padding: "50px",width:"90px"}}  htmlFor="width: ">width</label>
          <input  name="width" onChange={this.handleChange} value={this.state.width} />
        </div>
        <div style={{ padding: "50px",width:"900px"}}>
          <label style={{ padding: "50px",width:"90px"}} htmlFor="height: ">height</label>
          <input  name="height" onChange={this.handleChange} value={this.state.height} />
        </div>
        <div style={{ padding: "50px",width:"900px"}}>
          <label  style={{ padding: "50px",width:"90px"}} htmlFor="color">Color</label>
          <input  type="text" name="color" onChange={this.handleChange} value={this.state.color} />
        </div>
        <button >Add</button>
      </form>
    )
  }
}

export default NewBoxForm;