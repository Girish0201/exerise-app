import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Component/HeroBanner'
import SearchExerises from '../Component/SearchExerises'
 import Exerises from '../Component/Exerises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
         <HeroBanner /> 
        <SearchExerises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        <Exerises  setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>  
    </Box>
  )
}

export default Home