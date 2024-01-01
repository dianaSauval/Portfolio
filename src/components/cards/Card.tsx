import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProjects } from '../../@types/types';
import "./card.css"
import NestedModal from '../Modal/ModalCard';
import { Link } from 'react-router-dom';
import { Button as ButtonBootstrap} from "react-bootstrap";

export default function MediaCard( projects : IProjects) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 400, borderRadius:"15px", maxHeight:460 }} className='card'>
      <CardMedia
        sx={{ height: 240 }}
        image={projects.project.img}
        title={projects.project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='titleCard'>
          {projects.project.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" className='textCard'>
        {projects.project.description}
        </Typography>
      </CardContent>
      <CardActions>
{/*         <Button size="small" sx={{color:"#8406c8",border:"1px solid", borderColor:"#8406c8", padding:"6px", borderRadius:"6px", "&:hover":{backgroundColor:"#8406c8", color:"#fff", borderColor:"#fff"}}} variant="outlined">Share</Button>
        <Button size="small" sx={{color:"#8406c8"}}>Learn More</Button> */}
        <NestedModal project={projects} handleClose={handleClose} handleOpen={handleOpen} open={open}/>
      </CardActions>
    </Card>
  );
}