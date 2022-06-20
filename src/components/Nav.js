import React from "react";
import piggy from "../assets/porco.png";
import { Checkbox } from "semantic-ui-react";
import { Select } from 'semantic-ui-react'


const Nav = ({handleToggle, handleSort}) => {

	const sortOptions = [
		{ key: 'name', value: 'name', text: 'name' },
		{ key: 'weight', value: 'weight', text: 'weight' }]

	return <>
	<div className="navWrapper">
					<div className="ui toggle checkbox" onClick={handleToggle}>
					<input type="checkbox" name="public"/>
					<label>Filter greased</label>
					</div>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>	
		<Select placeholder='Select sort' options={sortOptions} onChange={handleSort} />
		</div>

	</>
};

export default Nav;
