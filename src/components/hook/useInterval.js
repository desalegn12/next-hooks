import {useState, useEffect} from 'react'

const useInterval= ()=> {

  const [currentTime,setTimeInInterval] = useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{
     setTimeInInterval(new Date())
    },10000)

    return () => clearInterval(interval)
  },[currentTime])
  return {
    seconds:currentTime.getSeconds(),
    minutes:currentTime.getMinutes(),
    hours:currentTime.getHours()
  }
  
}

export default useInterval;