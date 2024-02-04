
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box, Stack} from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
 

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart}) => (
  <ScrollMenu >
    <Stack direction= "row" >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        
        </Box>
      ))}
      </Stack>
    </ScrollMenu>
   
  );
  
  export default HorizontalScrollbar;




