import Box from '@mui/material/Box';
import { useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard';

interface ICharacter {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: Location,
  name: string,
  origin: Location,
  species: string,
  status: string,
  type: string,
  url: string
} 


const HeroCardContainer = ({characters}: any) => {

  return (
    <Box display='flex' flexWrap='wrap' gap={3} >
      {
        characters?.map((char : any) => (
          <HeroCard key={char.id} data={char}  />
        ))
      }
    </Box>
  )
}

export default HeroCardContainer;