import React from 'react'
import TypeIt from 'typeit'

class Type extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    new TypeIt(this.el, this.props);
  }
  
  render(){
  	return <h1 ref={(el) => { this.el = el; }}>{this.props.children}</h1>;
  }
}

export default Type