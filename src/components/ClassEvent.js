import { render } from "@testing-library/react";
import { Component } from "react";

class ClassEvent extends Component{
    hendleClick = ()=>{
        console.log("this is class based event handling")
    }
    render(){
        return(
            <div>
                this is class based component
                <button onClick={this.hendleClick}>Click Me</button>
            </div>
        )
    }
}  export default ClassEvent