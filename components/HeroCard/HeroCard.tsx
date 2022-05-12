import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import Box from '@mui/material/Box';

const HeroCard = ({data}: any) => {

  useEffect(()=> {
    console.log(data)
  },[])

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">{data?.name}</Typography>
          <Box display='flex' flexDirection='column' >
            <Typography variant="body2" color="text.secondary">
              Gender: {data.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Specie: {data.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {data.status}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default HeroCard;