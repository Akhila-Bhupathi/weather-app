import React,{useEffect} from 'react';
import axios from 'axios';


const Main=()=> {
  const api_call=async()=>{
  const API_KEY='a54e078040f3fd2fa1345d6359cc7429';
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=${API_KEY}`;
  const request=axios.get(url);
  const response=await request;
  console.log(response);
  }

  useEffect(()=>{
    api_call();
  },[])

  return (
    <div>
      
    </div>
  );
}

export default App;
