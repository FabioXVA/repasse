import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardVitrine from '../Card/CardVitrine';
import Grid from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';



class Vitrine extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			produto: []
		  }
	  }
	handeProduct(item){
		return (
			item.child.map( (product) => 
			
				<Grid item xs={4}>
					<CardVitrine title={product.title} id={product.idCrm} description={product.desc}/>
				</Grid>
			
				)
			)
	}
	render(){
	  return (
		<Container maxWidth="lg">
			{this.props.products.produtos.map( (item) => 
				<div  className="categoria" key={item.title}>
					<h1>{item.title}</h1>
					<Grid container spacing={1}>
						<Grid container item xs={12} spacing={3}>
						{this.handeProduct(item)}
						</Grid>
					</Grid>
				</div > 
			) }	
		</Container>
	  );

	}
}

export default Vitrine;