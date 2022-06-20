import React, {useState} from 'react'
import { Card, Icon } from 'semantic-ui-react'


export default function HogCard({name, image, specialty, greased, weight, highestMedal}) {

  const [showData, setShowData]=useState(false)

  function handleToggleData(){
    setShowData(oldState=>!oldState)
  }
  
  function renderData(){
    return <>
     <h3>{specialty}</h3>
    <p>{greased}</p>
    <p>{weight}</p>
    <p>{highestMedal}</p>
    </>
  }


  return <>
  <div className= "pigTile" onClick={handleToggleData}>
   <Card>
    <h3>{name}</h3>
    <img src={image} alt={name}/>
    {showData? renderData(): null}
   
    </Card>
  
  </div>
  </>
}
