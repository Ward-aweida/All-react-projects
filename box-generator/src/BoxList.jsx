.Box{
    position: relative;
    flex: 0 0 15vw;
    max-width: 10vw;
    height: 10vw;
    &__button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background:rgba(255, 255, 255, 0.755555555);
        border: none;
        border-radius: 50%;
        padding: 10px 12px;
        cursor: pointer;
        outline: none !important;
    }
}constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  create(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] })
  }

  render() {
    const boxes = this.state.boxes.map(box => 
      <Box 
        key={box.id}
        id={box.id}
        width={box.width} 
        height={box.height} 
        color={box.color} 
        removeBox={this.remove}
      />
    )

    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;