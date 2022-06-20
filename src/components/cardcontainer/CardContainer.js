import React, {useState} from 'react'
import Filter from '../filter/Filter'
import Sort from '../sort/Sort'
import HogCard from '../hogcard/HogCard'
import { Card } from 'semantic-ui-react'


 function CardContainer({hogs, handleToggle}) {

    const hogDataCopy = handleToggle ? hogs.filter((hogData)=> hogData.greased) : [...hogs]


    const hogData = hogDataCopy.map((hog)=>{
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