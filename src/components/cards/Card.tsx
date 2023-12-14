import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProjects } from '../../@types/types';
import "./card.css"

export default function MediaCard( projects : IProjects) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius:"15px" }} className='card'>
      <CardMedia
        sx={{ height: 240 }}
        image={projects.project.img}
        title={projects.project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projects.project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {projects.project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"#8406c8"}}>Share</Button>
        <Button size="small" sx={{color:"#8406c8"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}