import React from 'react'
import Doctor from './Doctor'

function Data(props) {
    // console.log(props)
  return (
    <div style={{display:"grid", }}>
        <div  style={{color:"red" ,fontFamily:"sans-serif",fontSize:"35px",}}>
        Clinic Name = {props.clinicData.clinic_name} <br/>
        </div>
       <div  style={{color:"yellow" ,fontFamily:"sans-serif",fontSize:"20px",}}>
       Adress = {props.clinicData.address} 
       </div>
        <div style={{margin:"10px"}}></div>
        <div style={{color:"black" ,fontFamily:"sans-serif",fontSize:"25px", fontWeight:"10px" ,backgroundColor:"#90A4AE"}}>
        <Doctor data={props.clinicData.doctors} clinicName={props.clinicData.name} handleSomething={props.handleSomething}/>
        </div>
        
    </div>
  )
}

export default Data