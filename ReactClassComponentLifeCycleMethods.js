import React from 'react';
class Pr extends React .Component{
    constructor()
    {
        super();
        console.log("Constructor Called");
        this.state={Key:"OldValue"}
    }
    componentDidMount()
    {
        console.log("ComponentDidMount called");
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdate called");
    }
    componentWillUnmount()
    {
        console.log("ComponentWillUnmount called");
    }
    fun=()=>{  this.setState({Key:"NewValue"}); console.log("Button is pressed");}
    render()
    {
        console.log("Render Method Called")
        return (
           <> 
           <button onClick={this.fun}>Click Here</button>
            <h2>{this.state.Key}</h2>
           </>
        )
    }
}
export {Pr};
