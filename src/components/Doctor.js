import React from 'react'

function Doctor(props) {
    // console.log(props)

    const handleSlots =(slot,temp,DoctorName,clinicName)=> {
        // alert(`This ${slot} for Doctor ${DoctorName} is now Booked`)
        // console.log(slot,temp)
        props.handleSomething(slot,temp,DoctorName,clinicName)

    }
  return (
    <div>
        {props.data.map((item)=> {
            return(
                <>
                 {item.DoctorName} 
                 <br/>
                 price = {item.charge}
                 Specialst = {item.type}
                 <br/>
                 {item.slots.map((slot)=> {
                     return(
                         <div onClick={()=> slot.temp  && handleSlots(slot.time,slot.temp,item.DoctorName,props.clinicName)} style={{margin:"10px"}}>
                          {slot.time} 
                          {slot.temp ? 'Available' : 'Already Booked'}
                         </div>
                     )
                 })}
                  <br/>
                  <hr/>
                </>
            )
        })}
    </div>
  )
}

export default Doctor