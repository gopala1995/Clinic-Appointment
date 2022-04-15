import React from "react";
import Data from "./components/Data";
import data from  "./db.json"
const App = () => {
  

  const [clinicData, setClinicData] = React.useState(data[0]);

  const handleClick = (name) => {
    console.log(name);
    const cc = data.filter((item) => name === item.name);
    setClinicData(cc[0]);
  };

  const handleSomething = (slot, temp, DoctorName, clinicName) => {
    // console.log('___',slot,temp,DoctorName,clinicName)
    // const findClinic = data.forEach((item)=> {
    //   if(item.name === clinicName){
    //     item.doctors.forEach((doc)=> {
    //       if(doc.DoctorName === DoctorName){
    //         doc.slots.forEach((slots)=> {
    //           if(slots.time === slot){
    //             slots.temp = false
    //           }
    //         })
    //       }
    //     })
    //   }

    // })
    const findClinic = data.find((item) => item.name === clinicName);
    const finddoc = findClinic.doctors.find(
      (item) => item.DoctorName === DoctorName
    );
    // const tt= data[0].doctors[0].slots[1].temp = false
    const findslot = finddoc.slots.find((item) => item.time === slot);
    findslot.temp = false;
    console.log(findslot);
    setClinicData(data[0]);
    console.log(data);
  };
  // console.log(clinicData.address);
  return (
    <div style={{ display: "flex",backgroundColor:"black" }}>
      <div>
        {data.map((item) => {
          return (
            <div className="active">
              <div onClick={() => handleClick(item.name)}>
                <h3 style={{color:"white"}}> {item.name}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "50px" }}></div>
      <Data clinicData={clinicData} handleSomething={handleSomething} />
    </div>
  );
};

export default App;
