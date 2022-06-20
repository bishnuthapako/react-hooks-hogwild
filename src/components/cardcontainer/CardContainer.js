import React, {useState} from 'react'
import Filter from '../filter/Filter'
import Sort from '../sort/Sort'
import HogCard from '../hogcard/HogCard'
import { Card } from 'semantic-ui-react'


 function CardContainer({hogs, handleToggle, sortBy}) {

    function handleSortData(){
        const hogDataCopy = handleToggle ? hogs.filter((hogData)=> hogData.greased) : [...hogs]
        // Return an array of filtered data
        // if sortBy is falsey {empty string}, do notihng to the array and return the hogDataCopy.
        // if sortBy is the same as "weight", sort the hogDataCopy based on the weight.
        // if sortBy is the same as "name", sort the hogDataCopy based on the name.
        
        if(!sortBy) return hogs
        if(sortBy==="weight") return hogDataCopy.sort((firstHog, secondHog)=>firstHog.weight - secondHog.weight)
        if(sortBy==="name") return hogDataCopy.sort((firstHog, secondHog)=>{
            if(firstHog.name < secondHog.name){
                return 1
            } else if(firstHog.name > secondHog.name){
                return 0
            }
        })
        
        return hogDataCopy;
        
    }


    const hogData = handleSortData().map((hog)=>{
        return <HogCard 
        key={hog.name} 
        name={hog.name} 
        image={hog.image} 
        specialty = {hog.specialty}
        greased = {hog.greased ? "Yes": "No"}
        weight = {hog.weight}
        highestMedal= {hog["highest medal achieved"]}
    
        />
     })

  return <>
   
    <Filter />
    <Sort />
    <Card.Group itemsPerRow = {4}>{hogData}</Card.Group>
   
  </>

   
  
}


export default CardContainer