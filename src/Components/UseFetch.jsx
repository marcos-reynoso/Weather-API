import { useState } from "react";
import axios from 'axios'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import {BsWind} from 'react-icons/bs'
import {FaRegEye} from 'react-icons/fa'
export function UseFetch() {

  const [data, setData] = useState([]);
 const [location,setLocation]=useState('')
 
 
 const handleSearch=(e)=>{
  e.preventDefault();
   if (location) {
     const url=`https://api.weatherapi.com/v1/current.json?key=6018bf6b8ef0476e93412437231609&q=${location}&aqi=no`
    
        axios.get(url)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    
    }
  }
  
  return <div >
    <div className="flex items-center space-x-4">

    <Input 
    value={location}
    variant={"faded"}
    onChange={e =>setLocation(e.target.value)} 
    type="text"
    color="secondary"
    placeholder="Enter Conutry"
    className="max-w-[220px]"
         
    />
    <Button   onClick={handleSearch} color="secondary" variant="ghost" className= 'w-20 h-12 rounded-full flex justify-center items-center' >search
    </Button>
    </div>
      
    {data?.location?.country && (
      <div className=" ">
   <Card >
    <div className="overflow-visible py-2">
     <h2 className="text-xl font-semibold">Country: {data.location.country}</h2>
     <h2 className="text-xl font-semibold">{data.location.localtime}</h2>

       <CardBody className="overflow-visible py-2">
     <Image
       alt="Card background"
      className="mx-auto"
       src={data.current.condition.icon}
       width={200}
     />
       <h1 className="text-xl ml-2">{data.current.condition.text}</h1>
   </CardBody>
    </div>
    <div className="flex   justify-between ">

   <CardHeader className="flex justify-between space-x-4">
    <div className="flex flex-col items-center">
     <h4 className=" flex items-center text-xl ml-2 gap-x-2 justify-center">Temperature: {data.current.temp_c}° <CiTempHigh/></h4>
     <h4 className=" flex items-center text-xl   gap-x-2 justify-center">Feels like:{data.current.feelslike_c}°C<CiTempHigh/> </h4>
    </div>
    <div className="flex flex-col items-center">

     <h4 className="flex items-center text-xl ml-2 gap-x-3 justify-center">Wind: {data.current.wind_kph}kp/h <BsWind/> </h4> 
     <h4 className="flex items-center text-xl ml-2 gap-x-3 justify-center">View: {data.current.vis_km}km <FaRegEye/></h4> 

    </div>
    <div className="flex flex-col items-center">

     <h4 className="flex items-center text-xl ml-2 justify-center">Humidity: {data.current.humidity}% <WiHumidity/></h4> 
    </div>
   </CardHeader>
    </div>

 </Card>
 </div>
    )}
  </div>;
}





export default UseFetch;
