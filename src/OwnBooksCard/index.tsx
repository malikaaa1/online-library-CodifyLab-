import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useTranslation } from 'react-i18next';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../breadcrumbs';
import './index.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function OwnBooksCard() {
  const classes = useStyles();
  const {t} = useTranslation()
  return (
    <>   
    <section>
    <Breadcrumbs page_title={t('Our Books')} page_url={`/own/books/page`}  />
  </section>
      <div className='containerBooksCArd'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    </>
  );
}
