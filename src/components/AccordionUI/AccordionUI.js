import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import style from './AccordionUI.module.css';

export default function MultiActionAreaCard() {
  return (
    <Card className={style.card__ui} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/borismg04/image/upload/v1652051587/iai5tvanmw8845ybkym0.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Motívate
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No basta con querer: debes preguntarte a ti mismo qué vas a hacer para conseguir
            lo que quieres.
            <h5>Franklin D. Roosevelt</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
