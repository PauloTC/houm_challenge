import Box from '@mui/material/Box';
import HeroCard from '../HeroCard/HeroCard';
import { ICharacters } from 'types'

const HeroCardContainer = ({characters}: ICharacters) => {

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' gap={3} >
      {
        characters?.map((char : any) => (
          <HeroCard key={char.id} character={char}  />
        ))
      }
    </Box>
  )
}

export default HeroCardContainer;