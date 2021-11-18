import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [Timer, setTimer] = useState(0)
  const [RegionChange, setRegionChange] = useState(0)
  const [CurrentRegion, setCurrentRegion] = useState(-1)

  const [FontKratong, setFontKratong] = useState([[], [0]])
  const [MiddleKratong, setMiddleKratong] = useState([[], [0]])
  const [BackKratong, setBackKratong] = useState([[], [0]])

  //background cycle time
  const timeCycle = 20


  const regionData = ['bgcentral', 'bgnorth', 'bgeisan', 'bgsouth']

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
        setTimer((Timer) => Timer + 10)
  
    }, 10);

    return () => clearInterval(interval)
    }, [])
  
  useEffect(() => {
    if(Math.floor(Timer/60) != RegionChange){
      setRegionChange(Math.floor(Math.floor((Timer/1000)%60)/timeCycle))
    }
  }, [Timer])

  useEffect(() => {
    setCurrentRegion((CurrentRegion + 1) % regionData.length)
  }, [RegionChange])

  const url = 'https://kmutt.loikratong/api'


  const getKratongData = async () => {
    const url = 'kratong.json'
    const { data } = await axios.get(url)
    return data
  }

  const writeToCache = (url, data) =>
    localStorage.setItem(url, JSON.stringify(data))

  const readFromCache = url => JSON.parse(localStorage.getItem(url)) || null

  const getFreshData = async (url, cacheResponse = false) => {
    const { data } = await axios.get(url)
    cacheResponse && writeToCache(url, data)
    return data
  }

  const getCachedData = url => readFromCache(url)

  const renderKratong = (props) => (
    <div>
      <img src={`./asset/${props.material}`}/>
      <img src={`./asset/${props.ulity}`}/>
      <img src={`./asset/${props.material}_bg`}/>
    </div>
  )
  
  const Kratong = ({ useCache }) => {
    const [Kratong, setKratong] = useState([])

    const getKratongData = async () => {
      setKratong([])

      if(useCache){
        const cachedKratong = getCachedData(url)
        if (cachedKratong){
          setKratong(cachedKratong)
        }
      }

      const freshKratong = await getFreshData(url, useCache)
      setKratong(freshKratong)
    }
  }

  

  return (
    
    <div>
     
        <div className="Display">
          
          <img className = "logoLayout" src={`./asset/${regionData[CurrentRegion]}.png`} alt="background-image" width = "100%" height = "100%" />
          <img className = "water" src={`./asset/${regionData[CurrentRegion]}_w.png`}  alt="water-reflection" width = "100%" height = "100%" />
        
        </div>
    </div>

  );
}

export default App;
