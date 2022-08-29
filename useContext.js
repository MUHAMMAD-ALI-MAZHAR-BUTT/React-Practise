//App.js
import { useState,createContext} from "react";
import {Pr} from './pr'
const Global=createContext();
function App() {
const [Data,SetData]=useState("Jan")
return (
	<Global.Provider value={Data}>
		<h1>App.js</h1> <Pr/>
	</Global.Provider>	
);
}
export default App;
export {Global}

--------------------------------------------------------------
//pr.js

import {SuperChild} from "./superChild"
function Pr()
{
return (
	<>
   <SuperChild/>
	</>
);
}
export {Pr};

----------------------------------------------------------------
// superChild
import {useContext} from 'react'
import {Global} from './App'
function SuperChild()
{
const context=useContext(Global);
return(
<>
<h1>C Child</h1><h1>{context}</h1>
</>)
}
export {SuperChild};
