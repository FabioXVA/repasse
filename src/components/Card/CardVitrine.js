import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CardVitrine extends Component {
  constructor(props){
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }


renderCard(){
    const useStyles = makeStyles({
      root: {
        maxWidth: 290,
      },
    });
    return (
      <Card >
        <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1595000289"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
              <Button size="small" color="primary" href={this.props.id}>
                Eu Quero
              </Button>
            </CardActions>
      </Card>);

}




  render(){
    return (
      <>
        {this.renderCard()}
      </>
    );
  }
}

export default CardVitrine;