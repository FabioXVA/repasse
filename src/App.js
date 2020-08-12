import React, { useState, Component } from 'react'
//import Banner from  "./components/Banner";
import Menu from  "./components/menu";
import Vitrine from  "./components/vitrine";
//import Cadastro from  "./dashboard/cadastro";



class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			allprodutos: {
				"produtos": [
				  	{
					"title": "jogos",
					"child": [
						{
						"title": "jogo1",
						"idCrm": "005056A967521EE8A5B6599F69196048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "jogo2",
						"idCrm": "005056A80C891EEAA9CBCF3C5D18C9ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "jogo3",
						"idCrm": "005056A967521EE8A5B6599F6916C048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "jogo4",
						"idCrm": "005056A80C891EEAA9CBCF3C5D1889ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "Jodo5",
						"idCrm": "005056A80C891EEAA9CBCF3C5D1AC9ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						}
					]
					},
					{
					"title": "controles",
					"child": [
						{
						"title": "controle1",
						"idCrm": "005056A80C891EEAA9CBCF3C5D1669ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "controles2",
						"idCrm": "005056A967521EE8A5B6599F69174048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "controles3",
						"idCrm": "005056A967521EE8A5B6599F69188048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "controles4",
						"idCrm": "005056A80C891EEAA9CBCF3C5D16C9ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						}
					]
					},
					{
					"title": "ps4",
					"child": [
						{
						"title": "ps4-1",
						"idCrm": "005056A967521EE8A5B6599F69178048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "ps4-2",
						"idCrm": "005056A80C891EEAA9CBCF3C5D16E9ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "ps4-3",
						"idCrm": "005056A80C891EEAA9CBCF3C5D1649ED",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						}
					]
					},
					{
					"title": "Xbox",
					"child": [
						{
						"title": "Xbox-1",
						"idCrm": "005056A967521EE8A5B6599F6917A048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						},
						{
						"title": "Xbox-2",
						"idCrm": "005056A967521EE8A5B6599F69182048",
						"desc" : "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past."
						}
					]
					},
					{
					"title": "Outros",
					"child": []
					}	
				]
			}
		}
	}
	 render() {
	  return (
	    <div className="App">
	    	<Menu />
	        <Vitrine products={this.state.allprodutos} />
	        {/* <Cadastro  /> */}
	    </div>
	  );
	}
}





export default App;
