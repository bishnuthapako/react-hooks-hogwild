import React, {useState} from "react";
import Nav from "./Nav";
import CardContainer from "./cardcontainer/CardContainer";
import 'semantic-ui-css/semantic.min.css'
import hogs from "../porkers_data";




function App() {
 const [showToggle, setShowToggle]= useState(false)

 function handletoggle(){
	setShowToggle(!showToggle)
 }



	return (
		<div className="App">
			<Nav handletoggle={handletoggle} />
			<CardContainer hogs={hogs} handleToggle={showToggle}/>
		</div>
	);
}

export default App;
