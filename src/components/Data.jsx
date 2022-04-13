import React from 'react'
import Doctor from './Doctor'

function Data(props) {
    // console.log(props)
  return (
    <div style={{display:"grid"}}>
        CLinic NAme = {props.clinicData.name} <br/>
        Adress = {props.clinicData.address} 
        <div style={{margin:"10px"}}></div>
        <Doctor data={props.clinicData.doctors} clinicName={props.clinicData.name} handleSomething={props.handleSomething}/>
    </div>
  )
}

export default Data