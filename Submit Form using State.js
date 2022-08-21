//-------------------------------------Class component
import React from 'react';
class Pr extends React .Component{
    constructor()
    {
        super();
        console.log("Constructor Called");
        this.state={Keyy:"gvrtvg",name:"dddewd",age:"5"}
    }
   
    render()
    {
        console.log("Render Method Called")
        return (
           <> 
           <h1>{this.state.Keyy} , {this.state.name} , {this.state.age}</h1>
           <form>
            <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} />
            <input type="text" onChange={(e)=>{this.setState({Keyy:e.target.value})}} />
            <input type="number" onChange={(e)=>{this.setState({age:e.target.value})}} />
            <input type="submit" />
            </form>
           </>
        )
    }
}
export {Pr};
//--------------------------------------------Functional component
import { useState } from 'react';
function App() {
  const [name,SetName]=useState("f");
  const [last,SetLast]=useState("f");
  const [age,SetAge]=useState("fe");
  return (
    <> 
    <h1>{name} , {last} , {age}</h1>
    <form>
     <input type="text" onChange={(e)=>SetName(e.target.value)} />
     <input type="text" onChange={(e)=>SetLast(e.target.value)} />
     <input type="number" onChange={(e)=>SetAge(e.target.value)} />
     <input type="submit" />
     </form>
    </>
  );
}

export default App;

