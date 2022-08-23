import React from 'react';
class CLass extends React.Component {
    constructor()
    {
        super();
        this.state={"Val1":1,"Val2":2}
    }
    componentDidUpdate(previousProps,PreviousState)
    {
        console.log(PreviousState)
        console.log("Mount called")
    }
    render()
    {
        console.log("render")
    return (
        <>
        <h1>{this.state.Val1} </h1>
        
        <h1>{this.state.Val2} </h1>
        <button onClick={()=>{this.setState({Val1:this.state.Val1+1,Val2:this.state.Val2+1})}}>Clicl</button>
        </>
    );    
    }
}
export {CLass};
