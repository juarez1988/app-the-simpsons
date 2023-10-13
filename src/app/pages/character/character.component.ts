import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  providers: [CharacterService]
})
export class CharacterComponent implements OnInit{
  
	public characters:any[]=[];
	public charactersOrig:any[]=[];
	public search: any = {
		nameSearch: ''
	};
  	public alertButtons = ['OK'];

  	constructor(private _characterService: CharacterService){}

  	ngOnInit(): void {
    	this._characterService.getCharacters().subscribe(
			res => {
				if(res.docs){
					this.characters = res.docs;
					this.charactersOrig = res.docs;
          			console.log('El resultado obtenido es: ',this.characters);
				}else{
					alert('Sin datos, No hay personajes disponibles en la API');
				}
			},
			error => {
				alert('Sin comunicación, No hay comunicación con la API The Simpsons. '+error);
			}
		);
  	}

	onSearch(): void{
		if(this.search.nameSearch == ''){
			this.characters = this.charactersOrig;
		}else{
			//Realizamos el filtrado de characters
			this.characters = this.charactersOrig;
			this.characters = this.characters.filter((character) => character.Nombre.includes(this.search.nameSearch));
		}
	}

}
