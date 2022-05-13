import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { ICharacter } from 'types';

const HeroCard = ({character}: ICharacter) => {

  const { image, name, gender , species , status } = character

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom fontWeight={600} variant="h6">{name}</Typography>
          <Box display='flex' flexDirection='column' >
            <Typography variant="body2" color="text.secondary">
              Gender: {gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Specie: {species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {status}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default HeroCard;