import React, {Component} from "react"
//component is used to create component
import {render} from "react-dom"
//render is used to render the application or page

class App extends Component{
  constructor(){
    super()
    //to intialise variables
    //it works when component loads
  }
  render(){
    return(
      <div>
        <p>class component welcomes</p>
      </div>
    )
  }
}
render (<App/>,document.getElementById("root"))
