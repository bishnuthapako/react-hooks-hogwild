import React, {useState} from "react";
import Nav from "./Nav";
import CardContainer from "./cardcontainer/CardContainer";
import 'semantic-ui-css/semantic.min.css'
import hogs from "../porkers_data";



function App() {
 const [showToggle, setShowToggle]= useState(false);
 const [sortBy, setSortBy]=useState("")

 function handleToggle(){
	setShowToggle(!showToggle)
 }

 function handleSort(e){
	setSortBy(e.target.textContent)
 }



	return (
		<div className="App">
			<Nav handleToggle={handleToggle} />
			<CardContainer hogs={hogs} handleToggle={showToggle} handleSort={handleSort} sortBy={sortBy}/>
		</div>
	);
}

export default App;
