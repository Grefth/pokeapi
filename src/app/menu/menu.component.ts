import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card } from '../interfaces/card.interface';
import { switchMap, forkJoin } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {  

  //creame un numereo random para la paginacion desde 0 hasta 144
  randomPage = Math.floor(Math.random() * 144);
  currentPage = this.randomPage;
  pageSize = 9;
  hasNextPage = true;
  pokemonService: PokemonService
  cards: Card[] = [];
  constructor(private http: HttpClient) {
      this.pokemonService = new PokemonService(this.http);
    }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService
      .getPokemons(this.currentPage * this.pageSize, this.pageSize)
      .pipe(
        switchMap(response => {
          this.hasNextPage = !!response.next;          
          return forkJoin(
            response.results.map(pokemon =>
              this.pokemonService.getPokemonDetails(pokemon.name)
            )
          );
        })
      )
      .subscribe(pokemonDetails => {        
        this.cards = pokemonDetails;
      });
  }
  
  //como agregar listener para buscar por nombre con el button de buscar
  searchByName() {    
    const name = (document.getElementById('search') as HTMLInputElement).value;
    this.pokemonService.getPokemonDetails(name).subscribe(pokemon => {      
      console.log(pokemon.name);
      if(pokemon.name === undefined){
        this.loadPokemons();
        alert("No se encontro el pokemon");
        return;
      }
      this.cards = [pokemon];
      
    });
  }

}
